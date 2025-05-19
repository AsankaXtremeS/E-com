// import { serve } from "inngest/next";
// import { inngest,syncUserCreation, syncUserDeletion, syncUserUpdate } from "@/config/inngest";

// // Create an API that serves zero functions
// export const { GET, POST, PUT } = serve({
//   client: inngest,
//   functions: [
//     syncUserCreation,
//     syncUserUpdate,
//     syncUserDeletion
//   ],
// });
import { serve } from "inngest/next";
import {
  inngest,
  syncUserCreation,
  syncUserUpdate,
  syncUserDeletion
} from "@/config/inngest"; // adjust path if needed

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [syncUserCreation, syncUserUpdate, syncUserDeletion],
});
