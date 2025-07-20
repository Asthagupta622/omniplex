"use client";

import React from "react";
import UserList from "@/components/UserList";

export default function UserListPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>
      <UserList />
    </div>
  );
}
