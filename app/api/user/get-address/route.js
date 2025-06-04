import connectDB from "@/config/db";
import { getAuth } from "@clerk/nextjs/server";
import Address from "@/models/Address";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const auth = await getAuth(request);
    const userId = auth?.userId;

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized: No user ID found",
        },
        { status: 401 }
      );
    }

    await connectDB();

    const addresses = await Address.find({ userId }).lean();

    return NextResponse.json(
      {
        success: true,
        message: "Addresses fetched successfully",
        addresses,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch addresses",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
