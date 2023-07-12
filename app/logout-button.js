"use client";
import { useRouter } from "next/navigation";

//Log out component that hits the logout endpoint then refreshes the page
export default function LogoutButton() {
  const router = useRouter();
  const handleLogout = async () => {
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      router.refresh();
    }
  };

  return <button onClick={handleLogout}>Sign Out</button>;
}
