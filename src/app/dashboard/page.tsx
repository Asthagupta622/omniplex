"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { selectAuthState } from "@/store/authSlice";

export default function DashboardPage() {
  const isAuthenticated = useSelector(selectAuthState);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
      <p>You are authenticated.</p>
    </div>
  );
}
