import { Inngest } from "inngest";
import connectDB from "./db";
import User from "../models/User";
import Order from "../models/Order";

export const inngest = new Inngest({ id: "admin" });

// Create
export const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" }, // ✅ fixed typo
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userData = {
      _id: id,
      email: email_addresses[0].email_address,
      name: `${first_name} ${last_name}`,
      imageUrl: image_url,
    };

    await connectDB();
    await User.findByIdAndUpdate(id, userData, { upsert: true }); // ✅ upsert added
  }
);

// Update
export const syncUserUpdate = inngest.createFunction(
  { id: "sync-user-update-from-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userData = {
      _id: id,
      email: email_addresses[0].email_address,
      name: `${first_name} ${last_name}`,
      imageUrl: image_url,
    };

    await connectDB();
    await User.findByIdAndUpdate(id, userData, { upsert: true });
  }
);

// Delete
export const syncUserDeletion = inngest.createFunction(
  { id: "sync-user-deletion-from-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;
    await connectDB();
    await User.findByIdAndDelete(id);
  }
);

//innges function to user order
export const createUserOrder = inngest.createFunction(
  {
    id: "create-user-order",
    batch: {
      maxSize: 25,
      timeout: "5s",
    },
    events: ["order/created"], // 🔧 Fixed incorrect placement
  },
  async ({ events }) => {
    const orders = events.map((event) => ({
      userId: event.data.userId,
      items: event.data.items,
      amount: event.data.amount,
      address: event.data.address,
      date: event.data.date,
    }));

    await connectDB();
    await Order.insertMany(orders);

    return { success: true, processed : orders.length };


    
  }
);
