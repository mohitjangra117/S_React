import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Cards() {
  const [val, setVal] = useState(false);
  return (
    <div className="w-full  flex   justify-center  items-center  h-screen ">
      <div className="relative w-60 h-32  flex rounded-md overflow-hidden  ">
        <img
          className={`shrink-0 w-full ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          }  h-full object-cover  transition-transform duration-500`}
          src="https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg"
        ></img>
        <img
          className={`shrink-0 ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } w-full h-full object-cover  transition-transform duration-500`}
          src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
        ></img>

       
        <span
          onClick={() => setVal(() => !val)}
          className="w-8 h-8  absolute  bottom-[0%] left-1/2 flex  items-center justify-center bg-[#dadada8b] rounded-full  "
        >
          <FaArrowRight size={".8em"} />
        </span>
      </div>
    </div>
  );
}
