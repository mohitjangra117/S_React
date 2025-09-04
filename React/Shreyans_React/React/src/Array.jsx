// import { useState } from "react";

// export default function Array(){
//     let ar=[1,2,3,4,5,6,6,6,6,6];

//     ////  Note -> filter checks the condition on all element and return it if condition is true

//     const [arr, setArr]=useState(ar);
//     return(
//         <>
//         {arr.map((el)=><h3>{el}</h3>)}
//         <button onClick={()=>setArr(()=>arr.filter((e,i)=>i!=arr.length-1 ))} > Remove  </button>
//         <br/><br/>
//         <button onClick={()=>setArr([...arr , 8])} >Add</button>
//         </>
//     )
// }

//////////////////////////   Updation in Array of Objects //////////////////////////

import { useState } from "react";

export default function Array() {
  ////  Note -> filter checks the condition on all element and return it if condition is true
  ////  In map wrap is a single div to print multiple values .{ In case of objects like this  }
  const [user, setUser] = useState([
    { name: "Kartik", age: 20 },
    { name: "Nipun", age: 21 },
  ]);
  return (
    <>
      {user.map((el) => (
        <div>
          <h3>{el.name}</h3> <h3>{el.age}</h3>
        </div>
      ))}

      <br />
      <button
       onClick={() =>
          setUser(() =>
            user.map((el) =>
              el.name === "Nipun" ? { name: "Nipun", age: 19 } : el     //  If true then replace that object with this one 
            )
          )
        } 
      >
        Update
      </button>
    </>
  );
}
