"use client";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { clientAuth } from "@/lib/firebase-client";
import { useState } from "react";
import postToken from "@/lib/post-token";

//Client registration component that works the same as the login component
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(clientAuth);

  if (user) {
    postToken(user.user);
  }
  return (
    <div className="App">
      Register:
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
      <button onClick={() => createUserWithEmailAndPassword(email, password)}>
        Register
      </button>
    </div>
  );
}
