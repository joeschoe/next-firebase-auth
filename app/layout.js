import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Next Firebase Auth Example",
  description: "Hi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h3>Next 13 Firebase Auth Example</h3>
        <h5>As of june 11 2023</h5>
        <h5>
          <Link href={"https://github.com/joeschoe/nextfire"}>
            Source on github
          </Link>
        </h5>
        {children}
      </body>
    </html>
  );
}
