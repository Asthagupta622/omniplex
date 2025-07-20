"use client";

import React, { useEffect } from "react";
import axios from "axios";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { auth } from "@/config/firebase"; 
import { getFirestore as getDb } from "firebase/firestore"; 

export default function SettingsPage() {
  const db = getDb(); 

  useEffect(() => {
    const checkPaymentSuccess = async () => {
      const url = new URL(window.location.href);
      const success = url.searchParams.get("success");

      if (success === "true") {
        const user = auth.currentUser;
        if (user) {
          const userRef = doc(db, "users", user.uid);
          await updateDoc(userRef, { isSubscribed: true });
          alert("✅ Subscription updated successfully!");
        }
      }
    };

    checkPaymentSuccess();
  }, []);

  const handleCheckout = async () => {
    try {
      const response = await axios.post("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      console.error("API call failed:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <button
        onClick={handleCheckout}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Subscribe Now
      </button>
    </div>
  );
}
