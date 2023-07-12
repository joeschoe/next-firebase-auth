"use client";
import { useState } from "react";
import { clientAuth } from "@/lib/firebase-client";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import postToken from "@/lib/post-token";

//Client log in component that
//logs in with firebase client auth
//uses postToken() to post the ID token to the server and logout of firebase client auth

export default function Login() {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(clientAuth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    postToken(user.user);
  }
  return (
    <div className="App">
      Sign in:
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={() => signInWithEmailAndPassword(email, password)}>
        Sign In
      </button>
    </div>
  );
}
