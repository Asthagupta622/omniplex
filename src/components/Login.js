import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../config/firebase"; // Make sure this path matches your actual firebase.js location

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      alert(`Welcome ${user.displayName}`);
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      alert("Sign-in failed");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Login</h2>
      <button onClick={signInWithGoogle} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
