import { serve } from "inngest/next";
import {
  inngest,
  syncUserCreation,
  syncUserUpdate,
  syncUserDeletion,
  createUserOrder
} from "@/config/inngest"; // adjust path if needed

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [syncUserCreation, syncUserUpdate, syncUserDeletion,createUserOrder],
});
