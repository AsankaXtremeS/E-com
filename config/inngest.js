// import { Inngest } from "inngest";
// import connectDB from "./db";
// import User from "../models/User";

// // Create a client to send and receive events
// export const inngest = new Inngest({ id: "admin" });


// // Inngest Function to save user data to a database
// export const syncUserCreation = inngest. createFunction(
//     {
//          id:'sync-user-from-clerk'
//     },

//     { event: 'clerk/user. created'},
//     async ({event})=>{
//         const {id, first_Name, last_Name, email_addresses,image_url} = event.data;
//         const userData = {
//             _id: id,
//             email: email_addresses[0].email_address,
//             name: first_Name + " " + last_Name,
//             imageUrl: image_url,
//         }
//         await connectDB();
//         await User.findByIdAndUpdate(id,userData)

//     }
// )

// // Inngest Function to update user data in the database
// export const syncUserUpdate = inngest.createFunction(
//     {
//         id: 'sync-user-update-from-clerk'
//     },
//     { event: 'clerk/user.updated' },
//     async ({ event }) => {
//         const { id, first_Name, last_Name, email_addresses, image_url } = event.data;
//         const userData = {
//             _id: id,
//             email: email_addresses[0].email_address,
//             name: first_Name + " " + last_Name,
//             imageUrl: image_url,
//         }
//         await connectDB();
//         await User.findByIdAndUpdate(id, userData);
//     }
// )

// // Inngest Function to delete user data from the database
// export const syncUserDeletion = inngest.createFunction(
//     {
//         id: 'sync-user-deletion-from-clerk'
//     },
//     { event: 'clerk/user.deleted' },
//     async ({ event }) => {
//         const { id } = event.data;
//         await connectDB();
//         await User.findByIdAndDelete(id);
//     }
// )
import { Inngest } from "inngest";
import connectDB from "./db";
import User from "../models/User";

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
