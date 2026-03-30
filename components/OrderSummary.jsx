"use client";
import React from "react";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";

const OrderSummary = () => {
  const { getCartCount, getCartAmount } = useAppContext();
  const router = useRouter();

  const itemCount = getCartCount();
  const subtotal = getCartAmount();
  const shipping = itemCount > 0 ? 5.0 : 0.0;
  const total = Number((subtotal + shipping).toFixed(2));

  return (
    <div className="w-full md:w-96 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Items ({itemCount})</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="border-t mt-2 pt-2 flex justify-between font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <button
        className="mt-5 w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 rounded-lg"
        onClick={() => router.push("/order-placed")}
        disabled={itemCount === 0}
      >
        Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
