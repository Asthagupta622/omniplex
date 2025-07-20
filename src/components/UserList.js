"use client";

import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userData);
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} className="mb-2">
            <span className="font-medium">{user.name}</span> —{" "}
            {user.isSubscribed ? (
              <span className="text-green-600">Subscribed</span>
            ) : (
              <span className="text-red-600">Not Subscribed</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
