import { useState } from "react";


export default function User() {

    ////  While working with objects in useState we need to use spread operator to get the previous state and then update the state with the new value.

    const [user, setUser] = useState({ name: "John", age: 30 });
  ////  if age is even button = green , if age is odd button = red
    return (
        <div className="w-full h-screen " >
            <div className="w-50 h-50 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] " >
        <div className="w-full h-full gap-5 rounded-lg flex flex-col  justify-center items-center  bg-blue-200"  >
<h1>{user.name}</h1>
<h1>{user.age}</h1>
<button onClick={()=>setUser({...user,age:user.age+1})} className={`text-xs rounded-full  ${user.age%2==0?"bg-green-600":"bg-red-600"} px-5 py-1`}    >Click</button>
        </div>
        </div>
        </div>
    )
}