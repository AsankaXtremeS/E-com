import connectDB from "@/config/db";
import authSeller from "@/lib/authSeller";
import Address from "@/models/Address";
import { getAuth } from "@clerk/nextjs/server";
import Order from "@/models/Order";
import { NextResponse } from "next/server";


export async function GET(request) {
    try {
        const { userId } = getAuth(request)

        const isSeller = await authSeller(userId);

        if (!isSeller) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Unauthorized: Not a seller",
                },
                { status: 401 }
            );
        }

        await connectDB();

        Address.length

        const orders = await Order.find({}).populate('address items.product')

        return NextResponse.json({
            success: true,
            orders,
        }, { status: 200
        })


    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message,
        }, { status: 200
        })
    }
}