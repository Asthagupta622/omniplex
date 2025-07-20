"use client";

import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ""
);

export default function StripeCheckoutPage() {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
    });

    const data = await res.json();
    if (data?.id) {
      const stripe = await stripePromise;
      stripe?.redirectToCheckout({ sessionId: data.id });
    } else {
      alert("Stripe session failed.");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Buy Pro Plan – $10</h1>
      <button
        onClick={handleCheckout}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Checkout with Stripe
      </button>
    </div>
  );
}
