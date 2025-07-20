"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { setAuthState, setUserDetailsState } from "@/store/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const user = useSelector((state: RootState) => state.auth.user);

  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      dispatch(setAuthState(false));
      dispatch(setUserDetailsState(null));
      router.push("/"); // Redirect to landing page or login
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-xl font-semibold">Omniplex</h1>

      {isAuthenticated ? (
        <div className="flex items-center gap-4">
          <img
            src={user?.profilePic || "/default-avatar.png"}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-sm">{user?.name || "No Name"}</span>
          <button
            onClick={handleSignOut}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-sm"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <a
          href="/auth"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-sm"
        >
          Sign In
        </a>
      )}
    </nav>
  );
};

export default Navbar;
