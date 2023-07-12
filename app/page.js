import getUser from "@/lib/get-user";
import LogoutButton from "./logout-button";
import Login from "./login";
import Register from "./register";

//Da home page baby
//get user from getUser() if one exists then show their email
//this is how you buld out you authorization server side rather than using firebase rules, which do not work on the server
//we checked if there was a user before displaying the protected email info
//you could also incorporate middleware with protected routes depending on your needs
export default async function Home() {
  const user = await getUser();
  if (user) {
    return (
      <main>
        you are signed in with the address {user.email} <LogoutButton />
      </main>
    );
  }
  return (
    <main>
      ----------------------------------
      <Login />
      or
      <Register />
    </main>
  );
}
