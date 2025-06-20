import { inngest } from "@/config/inngest";
import Product from "@/models/Product";
import { getAuth} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function POST(request) {
    try {
        const {userId} = await getAuth(request);
        const {address, items} = await request.json();

        if (!address ||items.length === 0) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Address or items data missing",
                },
                { status: 400 }
            );
        }

        //calculate total amount

        const amount = await items.reduce(async (totalPromise, item) => {
        const total = await totalPromise;
        const product = await Product.findById(item.product);
        return total + product.price * item.quantity;
        }, Promise.resolve(0));


        await inngest.send({
            name: "order/created",
            data: {
                userId,
                address,
                items,
                amount: amount + Math.floor(amount * 0.02),
                date: Date.now(),
            },

        })

        //clear user cart
        const user = await User.findById(userId);
        user.cartItems = {}
        await user.save()

        return NextResponse.json(
            {
                success: true,
                message: "Order Placed",
            },
            { status: 201 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                success: false,
                message: error.message,
            },
            { status: 500 }
        );
    }
}