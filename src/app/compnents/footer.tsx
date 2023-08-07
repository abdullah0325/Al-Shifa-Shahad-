import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook } from "lucide-react";
const Fotter =()=> { 
    return (

<div className=" mx-auto">
<div>
   <footer className="text-gray-600 body-font">
  <div className="container px-5 py-2 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight text-myhadden">
        Company
        </h2>
        <nav className="list-none mb-10">
          <ul>
          <li>
            <Link href="/"  className="text-base font-semibold tracking-tight hover:text-blue-400">
              Home
              </Link>
          </li><li>
            <Link href="#services"  className="text-base font-semibold tracking-tight hover:text-blue-400">
              About us
              </Link>
          </li><li>
            <Link href="#contact"  className="text-base font-semibold tracking-tight hover:text-blue-400">
              Contact us

              </Link>
          </li>
          {/* <li>
            <Link href="/"  className="text-base font-semibold tracking-tight hover:text-blue-400">
              Home
              </Link>
          </li> */}
         
          </ul>
        </nav>
      </div>
      
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight text-myhadden">
          servises
        </h2>
        <nav className="list-none mb-10">
        <li>
            <Link href="/"  className="text-base font-semibold tracking-tight hover:text-blue-400">
              
              
            Free Delivery

              </Link>
          </li>
          <li>
            <Link href="/"  className="text-base font-semibold tracking-tight hover:text-blue-400">
            24/7 Services

              </Link>
          </li>
          <li>
            <Link href="/"  className="text-base font-semibold tracking-tight hover:text-blue-400">
            Mony Back Garenty

              </Link>
          </li>
          
          </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight text-myhadden">
          Legals
        </h2>
        <nav className="list-none mb-10">
          <ul>
        <li>
            <Link href="/"  className="text-base font-semibold tracking-tight hover:text-blue-400">
              
              
              terms of use

              </Link>
          </li>
          <li>
            <Link href="/"  className="text-base font-semibold tracking-tight hover:text-blue-400">
              Privacy policy

              </Link>
          </li>
          
          <li>
            <Link href="/"  className="text-base font-semibold tracking-tight hover:text-blue-400">
              Cokies policy

              </Link>
          </li>
          </ul>
          </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="scroll-m-20 text-xl font-semibold tracking-tight text-myhadden">
          servises
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="text-base font-semibold tracking-tight hover:text-blue-400"
            >
              Your Email
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Get Notifiy
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
          please provide your email 
          <br className="lg:block hidden" />
          to get Notifiy
        </p>
      </div>
    </div>
  </div>
  <div >
  <div>
    <div className="  container px-5 py-6 mx-auto flex justify-between items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg> */}

<div></div>
        <Image alt="Ham berger" width={80} className=" rounded-3xl" src={require("../../../public/pic/rbg.png")}/>
        <span className="ml-3 text-xl">My Company</span>

        </a>
       
        <div className="flex ml-9 items-center gap-4">

            <Image alt="watsapp" className="ml-"  width={50} height={50} src={require("../../../public/pic/watsapp.png")} />

            <span className="text-xl ">+92 300 9010802</span>
        </div>

        <div className="flex items-center mr- mt-7 md:mt-0 gap-2" >
            
            <Link href={"https://www.facebook.com/shakiullahafghan.shakir?mibextid=b06tZ0"}>
              <Image alt="watsapp"  className="" width={50} height={50} src={require("../../../public/pic/facebook.png")} /> 
              </Link>
              <samp className="ml-2 text-xl">Our Facebook</samp>
               </div>

        </div>
     
      
      
    </div>
  </div>
</footer>
  </div>
  </div>
    )
}
export default Fotter;