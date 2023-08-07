// "use client";
// import Link from "next/link";
// import { Menu } from "./ui/menu";
// import { SearchIcon } from "lucide-react";
// import { useState } from "react";
// import Image from "next/image";

// const Navbar = () => {
//   const [navbar, setNavbar] = useState(false);

//   const handleNav = () => {
//     setNavbar(!navbar);
//   };

//   console.log("Value of our navbar in boolean: " + navbar);
//   return (
//     <header className="bg-green-100
//     ">
//       {/* large Screen */}
//       <nav
//         className={`${
//           navbar
//             ? "hidden"
//             : "flex justify-between items-center px-10 h-20 w-full"
//         }`}
//       >
//         <div className="">Large Screen Nav</div>
//         <div className="lg:flex gap-5 hidden">
//           {Menu.map((link, index) => (
//             <Link key={index} href={link.path} className="hover:bg-green-200">
//               {link.name}
//             </Link>
//           ))}
//         </div>
//         <div className=" hidden lg:flex bg-white border gap-1 border-black rounded-sm items-center px-2">
//           <SearchIcon size={15} />
//           <input
//             type="text"
//             placeholder={"What are you looking for"}
//             className="outline-none"
//           />
//         </div>
//         <div className="lg:block hidden">cart</div>
//         <div className="lg:hidden block" onClick={handleNav}>
//         <Image alt="log" className="lg:hidden block w-11 h-11" 
//     src={require("../../public/maneu1.png")}/>
//         </div>
//       </nav>
//       {/* small screen */}
//       <div
//         className={`${
//           navbar
//             ? "top-0 left-0 w-full h-screen z-[100] flex justify-between py-3 px-10"
//             : "hidden"
//         }`}
//       >
//         <div className="">Mobile Nav</div>
//         <div className="  flex-col flex gap-5 mt-40 items-center  ">
//           {Menu.map((link, index) => (
//             <Link key={index} href={link.path} className="hover:bg-green-200">
//               {link.name}
//             </Link>
//           ))}
//         </div>
//         <div className="" onClick={handleNav}>
//         <Image alt="log" className="lg:hidden block w-11 h-11" 
//     src={require("../../public/maneu1.png")}/>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Navbar;



"use client";
import Link from "next/link";
import { Menu } from "./ui/manu";
import { SearchIcon, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import logo from "/public/pic/rbg.png"

const Navbarm = () => {
  const [navbar, setNavbar] = useState(false);

  const handleNav = () => {
    setNavbar(!navbar);
  };

  console.log("Value of our navbar in boolean: " + navbar);
  return (
    <header className="
    ">
      {/* large Screen */}
      <nav
        className={`${
          navbar
            ? "hidden"
            : "flex justify-between items-center px-1 h-20 w-full"
        }`}
      >
        <div className="">    <Image width={100} height={100} src={logo} alt='Dine market'/>   </div>
        <div className="lg:flex gap-5 hidden">
          {Menu.map((link, index) => (
            <Link key={index} href={link.path} className="hover:text-blue-400">
              {link.name}
            </Link>
          ))}
        </div>
        <div className=" hidden lg:flex bg-white border gap-1 border-black rounded-sm items-center px-2">
          <SearchIcon size={15} />
          <input
            type="text"
            placeholder={"What are you looking for"}
            className="outline-none"
          />
        </div>
        <div className="lg:block hidden">  
        <div className="w-10 h-10 rounded-full hover:scale-110  mr-7 duration-300  flex justify-center items-center 
       bg-gray-200">
      <div>
        

      <div className="navbar-end  ">
      {/* <Link href={'#'} className="btn">Button</Link> */}
      <div className=" dropdown dropdown-end">
        
      <label tabIndex={0} className=" p-4 cursor-pointer  group  duration-30">
        <div className="indicator  ">
          <ShoppingCart  className="h-5  w-5 text-black " 
          fill="none" viewBox="0 0 24 24" 
          stroke="currentColor"/><path strokeLinecap="round" 
          strokeLinejoin="round" strokeWidth="2" 
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63
          .63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          <span className="badge badge-sm indicator-item bg-red-300 text-white">0</span>
        </div>
      </label>
   
    </div>



       </div>
    
      </div>
      </div>
        
          </div>
        <div className="lg:hidden block" onClick={handleNav}>
        <Image alt="log" className="lg:hidden block w-11 h-11" 
    src={require("../../../public/pic/maneu1.png")}/>
        </div>
      </nav>
      {/* small screen */}
      <div
        className={`${
          navbar
            ? " w-full h-screen z-[100] flex justify-between py-6 px-10"
            : "hidden"
        }`}
      >
        
        <div className="mb-11">
        <Image src={logo} className="" width={100} height={100} alt='Dine market'/>
        
        </div>






        <div className="  flex-col flex gap-5 mr-20 mt-40 items-center  ">



        <div className="w-10 h-10 rounded-full hover:scale-110  duration-300  flex justify-center items-center 
       bg-gray-200">
      <div>
        

      <div className="navbar-end  ">
      {/* <Link href={'#'} className="btn">Button</Link> */}
      <div className=" dropdown dropdown-end">
        
      <label tabIndex={0} className=" p-4 cursor-pointer  group  duration-30">
        <div className="indicator  ">
          <ShoppingCart  className="h-5  w-5 text-black " 
          fill="none" viewBox="0 0 24 24" 
          stroke="currentColor"/><path strokeLinecap="round" 
          strokeLinejoin="round" strokeWidth="2" 
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63
          .63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          <span className="badge badge-sm indicator-item bg-red-300 text-white">0</span>
        </div>
      </label>
   
    </div>



       </div>
    
      </div>
      </div>




          {Menu.map((link, index) => (
            <Link key={index} href={link.path} className="hover:text-blue-500   ">
              {link.name}
            </Link>
          ))}
        </div>
        <div className=" w-8 h-8" onClick={handleNav}>
        <X className=" w-8 h-8"  />
        {/* <Image alt="log" className="lg:hidden block w-11 h-11" 
    src={require('../../../public/pic/Featured4.webp')}/> */}
        </div>
      </div>
    </header>
  );
};
export default Navbarm;