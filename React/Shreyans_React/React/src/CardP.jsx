import { useState } from "react";

export default function CardP({val , handlefriend , index } ){
   
    const {name , image , friends }=val;
  

    return (
        <div className=" w-50 rounded-md bg-red-200 overflow-hidden">
            <div className=" w-full h-30   "  >
          <img className="w-full h-full overflow-hidden object-cover  " src={image} />
            </div>
<div className="flex flex-col mt-4 justify-center items-center  gap-3 " >
    <h1> {name} </h1>
    <button onClick={()=>handlefriend(index)} className={`px-2 rounded-lg mb-2  py-1 text-sm ${friends?"bg-green-400":"bg-blue-400"} `} > {friends ? "Friend" : "Add Friend"} </button>
</div>
        
        </div>
    )

}