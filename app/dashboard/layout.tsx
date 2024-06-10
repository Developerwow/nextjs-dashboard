"use client";
import React, { useState, ReactNode, useRef, useEffect } from "react";

import Link from "next/link";
import NavLinks from "../ui/dashboard/nav-links";
import Image from "next/image";

 
export default function Layout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const trigger = useRef<any>(null);
    const sidebar = useRef<any>(null);

        useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
          if (!sidebar.current || !trigger.current) return;
          if (
            !sidebarOpen ||
            sidebar.current.contains(target) ||
            trigger.current.contains(target)
          )
            return;
          setSidebarOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
      });
  return (

    <div className="relative min-h-screen lg:flex">
         <header className="text-gray-100 bg-gray-800 lg:hidden">
            <div className="container flex items-center justify-between p-4 mx-auto">
                <a href="#" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                </a>
                
                <button  ref={trigger}onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-white rounded-lg focus:outline-none hover:bg-gray-700">
                    {!sidebarOpen &&  <svg  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg> }
                   
    
                    {sidebarOpen && <svg  className="w-6 h-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    }
                </button>
            </div>
        </header>
        {/* className={` absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0   */}

        <aside  ref={sidebar}

        className={`fixed inset-y-0 left-0 z-30 flex flex-col md:w-[14.5rem] sm:w-[4.1rem] min-h-screen space-y-6 overflow-y-auto text-gray-100 
        transition duration-200 transform bg-gray-800 lg:translate-x-0 lg:relative lg:inset-0

         ${sidebarOpen  ? 'translate-x-0 ease-in' : '-translate-x-full ease-out'}`}>
              <div className="flex flex-col sm:items-center    flex-1 space-y-6">
                <Link href='/' className="flex items-center justify-center w-full p-5 lg:p-0 lg:h-20 font-bold text-white truncate bg-blue-600 whitespace-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                </Link>
                <nav className="flex flex-col items-center space-y-2">
                    <NavLinks/>
                
                </nav>

            </div>

            
            </aside>

            <main id="content" className="flex-1 pb-12 space-y-6 overflow-y-auto bg-gray-100 lg:h-screen md:space-y-8">
            <header className="flex items-center justify-between h-20 px-6 bg-white border-b">
<div className="relative flex items-center">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </span>
        
        <input type="text" className="py-2.5 pl-10 pr-4 text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-200 rounded-lg sm:w-auto w-36 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Search"/>
    </div>

    <div className="flex items-center">
        <div className="relative">
            <button className="transition-colors duration-300 rounded-lg sm:px-4 sm:py-2 focus:outline-none hover:bg-gray-100"  onClick={()=>{sidebarOpen!=sidebarOpen}} >
                <span className="sr-only">User Menu</span>
                <div className="flex items-center md:-mx-2 ">
                    <div className="hidden md:mx-2 md:flex md:flex-col md:items-end md:leading-tight">
                        <span className="font-semibold text-sm text-gray-800">Dhaiflaah</span>
                        <span className="text-sm text-gray-600">Lecturer</span>
                    </div>

                    <Image className="flex-shrink-0 w-10 h-10 overflow-hidden bg-gray-100 rounded-full md:mx-2"  src="" alt="user profile photo" />
                </div>
            </button>
            
          
        </div>



         {/* <div  className="fixed inset-0 z-30"  />  */}

        <button className="relative p-2 mx-3 text-gray-400 transition-colors duration-300 rounded-full hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100">
            <span className="sr-only">Notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 mt-1 mr-2 bg-blue-700 rounded-full"></span>
            <span className="absolute top-0 right-0 w-2 h-2 mt-1 mr-2 bg-blue-700 rounded-full animate-ping"></span>
            
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
        </button>

        <button className="p-2 text-gray-400 transition-colors duration-300 rounded-full focus:outline-none hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100">
            <span className="sr-only">Log out</span>
            
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
        </button>




       
    </div>
</header>

{children}
 </main>

</div>

  );
}