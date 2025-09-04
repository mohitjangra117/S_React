import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../Context";

export default function User() {
  const { users, setusers } = useContext(UserContext);
  console.log(users);
  return (
    <div>
      <h1 className="text-3xl">User List</h1>
      <div className="bg-red-200 p-3">
        {users.map((u) => (
          <Link
            key={u.id}
            to={`/user/${u.id}`}
            className="mb-3 bg-red-100 p-3"
          >

            {u.name}

          </Link>
        ))}
      </div>
      {/* Add Outlet to render nested route */}
      <Outlet />
    </div>
  );
}