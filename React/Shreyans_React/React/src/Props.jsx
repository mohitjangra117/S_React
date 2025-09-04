import { useState } from "react";

export default function Props({values , handleClick , index}) {
  const {name , image , friends }=values;
  // console.log(name);
  
  return (
    <>   
     <div className=" w-52 bg-white rounded-md overflow-hidden">
      <div className="w-full h-40 bg-sky-300">
        <img
          className="w-full h-full object-cover object-[center_top]"
          src={image}
        ></img>
      </div>

      <div className="w-full gap-1 justify-center items-center flex flex-col ">
        <h3 className=" text-xl font-semibold ">{name}</h3>
      
        <button
          onClick={()=>handleClick(index)}
          className={`mt-2 mb-2  px-3 py-1 text-xs text-white${friends ? " bg-red-400":" bg-blue-400"} font-semibold rounded-md `}
        >
         {friends?"Friend":"Add Friend"}
        </button>
      </div>  
    </div>




    </>

  );
}
