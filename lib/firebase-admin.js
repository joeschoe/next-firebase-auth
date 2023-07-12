import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
//Go to your firebase project console ie the firebase site > project settings > service accounts tab > generate new private key button
//save the file > rename it service_account.json > put in the root of this project
import serviceAccount from "@/service_account.json";

const firebaseAdminConfig = {
  credential: cert({
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    projectId: serviceAccount.project_id,
  }),
};

const app =
  getApps().length <= 0 ? initializeApp(firebaseAdminConfig) : getApps()[0];

export const adminAuth = getAuth(app);
