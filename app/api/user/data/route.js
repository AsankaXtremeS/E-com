import connectDB from "@/config/db";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { userId } = getAuth(request);

    if (!userId) {
      return NextResponse.json({
        success: false,
        message: "Unauthorized",
      }, { status: 401 });
    }

    await connectDB();
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      }, { status: 404 });
    }

    // ✅ THIS is what was missing
    return NextResponse.json({
      success: true,
      user,
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message || "Internal Server Error",
    }, { status: 500 });
  }
}
