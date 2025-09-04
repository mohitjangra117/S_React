import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";

////  We get the value of the route written in the url field
////  import useParams from react-router-dom to get the dynamic route params
//// useParams is a hook that returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path> in the route configuration.
////   example name is defined in the route path and we are getting it here using useParams

import { Outlet } from "react-router-dom";  ////  Outlet is used to render the child route in the parent route

export default function User() {
  return (
    <div className="w-1/2 m-auto mt-2 ">
      <h1 className="text-red-200 text-3xl mb-2 "> User </h1>

      <div className="flex w-1/5 flex-col mt-5 ">
        <Link
          className="p-1 bg-red-200 text-xl mb-1 hover:bg-red-400"
          to="/user/john"
        >
         
          John

        </Link>
      </div>

      <div className="flex w-1/5 flex-col mt-5 ">
        <Link className="p-1 bg-red-200 text-xl mb-1 hover:bg-red-400" to="/user/ayush">
        Ayush
          
        </Link>
      </div>

      <div className="flex w-1/5 flex-col mt-5 ">
        <Link className="p-1 bg-red-200 text-xl mb-1 hover:bg-red-400" to="/user/anubhav">
         
         Anubhav
         
        </Link>
      </div>

      
<hr/>

<Outlet/>
    </div>
  );
}
