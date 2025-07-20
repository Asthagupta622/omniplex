"use client";

import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const AuthPage = () => {
  const handleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-6 py-3 rounded-md"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default AuthPage;
