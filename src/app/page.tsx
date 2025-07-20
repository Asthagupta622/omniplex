"use client";

import AuthWrapper from "./AuthWrapper";
import MainPrompt from "../components/MainPrompt/MainPrompt";
import CheckoutButton from "../components/checkout"; // ✅ Correct path

const Home = () => {
  return (
    <div>
      <AuthWrapper />
      <MainPrompt />

      {/* ✅ Stripe Checkout Button */}
      <div style={{ marginTop: "2rem" }}>
        <CheckoutButton />
      </div>
    </div>
  );
};

export default Home;
