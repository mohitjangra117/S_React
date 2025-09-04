import { Link, NavLink, Route, Routes } from "react-router-dom"; //// import for routing
import Home from "./components/Home"; ////  All routing components are in components folder
import About from "./components/About";
import User from "./components/User";

// export default function Router() {
//     return(
//         <div className=" h-screen w-full flex flex-col justify-baseline  gap-10   " >
//            <nav className="flex mt-5 justify-center gap-10 " >
//                <Link className="px-3 py-1 bg-zinc-200 " to="/">Home</Link>
//                <Link className="px-3 py-1 bg-zinc-200 " to="/about">About</Link>
//                <Link className="px-3 py-1 bg-zinc-200 " to="/user">User</Link>
//            </nav>
//           <div>
//            <Routes>
//             <Route path="/"  element={<Home/>} />
//             <Route path="/about"  element={<About/>} />
//             <Route path="/user"  element={<User/>} />
//            </Routes>
//            </div>
//         </div>
//     )
// }

///////////////  Imp   ////////////
////  Instead of <Link>  use  <NavLink>
////  Beacause <NavLink>  has  className  property which is not in <Link>
////  We can set Link is Active or not by using className property in <NavLink>

// export default function Router() {
//     return(
//         <div className=" h-screen w-full flex flex-col justify-baseline  gap-10   " >
//            <nav className="flex mt-5 justify-center gap-10 " >
//                <NavLink  to="/about">About</NavLink>
//                <NavLink   to="/">Home</NavLink>
//                <NavLink  to="/user">User</NavLink>
//            </nav>
//           <div>
//            <Routes>
//             <Route path="/"  element={<Home/>} />
//             <Route path="/about"  element={<About/>} />
//             <Route path="/user"  element={<User/>} />``
//            </Routes>
//            </div>
//         </div>
//     )
// }

////////////////////////////////  There are three method to give active link to Route ///////////////////

/////////////////////////////////////// 1. By using Style tag in NavLink  and e is the inbuilt property of

////  NavLink which is used to check whether the link is active or not

// export default function Router() {
//   return (
//     <div className=" h-screen w-full flex flex-col justify-baseline  gap-10   ">
//       <nav className="flex mt-5 justify-center gap-10 ">
//         <NavLink
//           style={(e) => {
//             return {
//               color: e.isActive ? "tomato" : "",
//               fontWeight: e.isActive ? "bold" : "",
//             };
//           }}
//           to="/"
//         >
//           Home
//         </NavLink>
//         <NavLink
//           style={(e) => {
//             return {
//               color: e.isActive ? "tomato" : "",
//               fontWeight: e.isActive ? "bold" : "",
//             };
//           }}
//           to="/user"
//         >
//           User
//         </NavLink>
//         <NavLink
//           style={(e) => {
//             return {
//               color: e.isActive ? "tomato" : "",
//               fontWeight: e.isActive ? "bold" : "",
//             };
//           }}
//           to="/about"
//         >
//           About
//         </NavLink>
//       </nav>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/user" element={<User />} />
//           ``
//         </Routes>
//       </div>
//     </div>
//   );
// }

/////////////////////////////////  2. By using className property in NavLink  and e is the inbuilt property of
////  NavLink which is used to check whether the link is active or not

// export default function Router() {
//   return (
//     <div className=" h-screen w-full flex flex-col justify-baseline  gap-10   ">
//       <nav className="flex mt-5 justify-center gap-10 ">
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/user">User</NavLink>
//         <NavLink
//           className={(e) => (e.isActive ? "text-red-400 font-bold" : "")}
//           to="/about"
//         >
//           About
//         </NavLink>
//       </nav>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/user" element={<User />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

////////////////////  same method 2 using join ////  prefer this one to give more css  ///////////////////////

// export default function Router() {
//   return (
//     <div className=" h-screen w-full flex flex-col justify-baseline  gap-10   ">
//       <nav className="flex mt-5 justify-center gap-10 ">
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/user">User</NavLink>
//         <NavLink
//           className={(e) => {
//             return [
//               e.isActive ? "text-red-400" : "",
//               e.isActive ? "font-bold" : "",
//             ].join(" ");
//           }}
//           to="/about"
//         >
//           About
//         </NavLink>
//       </nav>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/user" element={<User />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

////////////////////////////////////  3. By using className property on the child element ///////////////////////////////

// export default function Router() {
//   return (
//     <div className=" h-screen w-full flex flex-col justify-baseline  gap-10   ">
//       <nav className="flex mt-5 justify-center gap-10 ">
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/user">User</NavLink>
//         <NavLink to="/about">
//           {(e) => {        ////  e is inbuild proprty ( we can use any variable e , eee ,elem ,etc)
//             return (
//               <span
//                 className={[
//                   e.isActive ? "text-red-400" : "",
//                   e.isActive ? "font-bold" : "",
//                 ].join(" ")}
//               >
//                 About
//               </span>
//             );
//           }}
//         </NavLink>
//       </nav>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/user" element={<User />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }



///////////////////////////////////////////////////   Part 9  /////////////////////////////////////
////  React Dynamic  Routing

// import Dynamic from "./Dynamic";    //  We will show user details in this component

// export default function Router() {
//   return (
//     <div className=" h-screen w-full flex flex-col justify-baseline  gap-10   ">
//       <nav className="flex mt-5 justify-center gap-10 ">
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/user">User</NavLink>
//         <NavLink to="/about">
//           {(e) => {        ////  e is inbuild proprty ( we can use any variable e , eee ,elem ,etc)
//             return (
//               <span
//                 className={[
//                   e.isActive ? "text-red-400" : "",
//                   e.isActive ? "font-bold" : "",
//                 ].join(" ")}
//               >
//                 About
//               </span>
//             );
//           }}
//         </NavLink>
//       </nav>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/user" element={<User />} />
//           <Route path="/user/:name" element={<Dynamic />} />  
//         </Routes>
//       </div>
//     </div>
//   );
// }




/////////////////////////////////////////////////////////////////////////////////////
////  To open the page in below in the same page instead of the next page .  
////  Place the child component in the parent component and use  <Outlet>  in the parent component and  <Route> in the child component
////  We can use  <Outlet>  in the parent component and  <Route> in the child component
////  and we can use  <Link>  in the parent component to open the child component in the same page



import Dynamic from "./Dynamic";    //  We will show user details in this component
export default function Router() {
  return (
    <div className=" h-screen w-full flex flex-col justify-baseline  gap-10   ">
      <nav className="flex mt-5 justify-center gap-10 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/user">User</NavLink>
        <NavLink to="/about">
          {(e) => {        ////  e is inbuild proprty ( we can use any variable e , eee ,elem ,etc)
            return (
              <span
                className={[
                  e.isActive ? "text-red-400" : "",
                  e.isActive ? "font-bold" : "",
                ].join(" ")}
              >
                About
              </span>
            );
          }}
        </NavLink>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} > 
           <Route path="/user/:name" element={<Dynamic />} />  
          </Route>
        </Routes>
      </div>

    </div>
  );
}
