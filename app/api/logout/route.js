import { cookies } from "next/headers";

//Route handler for logout endpoint that expires the session cookie
export async function POST() {
  const options = {
    name: "session",
    value: "",
    maxAge: -1,
  };

  cookies().set(options);
  return (
    new Response(),
    {
      status: 200,
      headers: { "content-type": "application/json" },
    }
  );
}
