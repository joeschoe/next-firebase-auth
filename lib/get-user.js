import { cookies } from "next/headers";
import { adminAuth } from "@/lib/firebase-admin";

//Get the user from the session cookie
//if theres no session or its invalid, return null
export default async function getUser() {
  const session = cookies().get("session")?.value;

  if (!session) {
    return null;
  }

  const user = await adminAuth.verifySessionCookie(session, true);

  if (!decodedClaims) {
    return null;
  }

  return user;
}
