'use client';
import React, { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Loading from "@/components/Loading";
import toast from "react-hot-toast";

const Orders = () => {
  const { currency, getToken, user } = useAppContext();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSellerOrders = async () => {
    try {
      const token = await getToken();

      const res = await fetch("/api/order/seller-orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (data.success) {
        setOrders(data.orders);
        setLoading(false);
      } else {
        toast.error(data.message || "Failed to load orders");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (user) {
      fetchSellerOrders();
    }
  }, [user]);

  return (
    <div className="p-4 md:p-10 text-sm space-y-5 w-full">
      <h2 className="text-lg font-medium">Orders</h2>
      {loading ? (
        <Loading />
      ) : (
        <div className="max-w-4xl rounded-md">
          {orders.map((order, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-5 justify-between p-5 border-t border-gray-300"
            >
              <div className="flex-1 flex gap-5 max-w-80">
                <Image
                  className="max-w-16 max-h-16 object-cover"
                  src={assets.box_icon}
                  alt="box_icon"
                />
                <p className="flex flex-col gap-3">
                  <span className="font-medium">
                    {order.items
                      .map(
                        (item) =>
                          item.product?.name + ` x ${item.quantity}`
                      )
                      .join(", ")}
                  </span>
                  <span>Items : {order.items.length}</span>
                </p>
              </div>
              <div>
                <p>
                  <span className="font-medium">
                    {order.address?.fullName}
                  </span>
                  <br />
                  <span>{order.address?.area}</span>
                  <br />
                  <span>
                    {order.address
                      ? `${order.address.city}, ${order.address.state}`
                      : ""}
                  </span>
                  <br />
                  <span>{order.address?.phoneNumber}</span>
                </p>
              </div>
              <p className="font-medium my-auto">
                {currency}
                {order.amount}
              </p>
              <div>
                <p className="flex flex-col">
                  <span>Method : COD</span>
                  <span>
                    Date : {new Date(order.date).toLocaleDateString()}
                  </span>
                  <span>Payment : Pending</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
