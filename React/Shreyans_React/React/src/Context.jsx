import { createContext , useState  } from "react";

export const UserContext = createContext();

const Context=(props)=>{
    const [users , setusers] = useState([
  { id: 0, name: "John", age: 25 },
  { id: 1, name: "Doe", age: 30 },
  { id: 2, name: "Smith", age: 35 }

    ]);

    return(
        <UserContext.Provider value={{users , setusers}}>
            {props.children}
        </UserContext.Provider>
    );
};

export default Context;