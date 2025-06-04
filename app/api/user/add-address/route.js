import connectDB from "@/config/db";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Address from "@/models/Address";

export async function POST(request) {
  try {
    const auth = await getAuth(request);
    const userId = auth?.userId;

    if (!userId) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { address } = body;

    if (!address || Object.keys(address).length === 0) {
      return NextResponse.json({ success: false, message: "Address data missing" }, { status: 400 });
    }

    await connectDB();

    const newAddress = await Address.create({ ...address, userId });

    return NextResponse.json(
      {
        success: true,
        message: "Address added successfully",
        newAddress,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Add Address API error:", error); 
    return NextResponse.json(
      {
        success: false,
        message: "Failed to add address",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
