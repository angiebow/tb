'use client';

// import Link from "next/link";
import localFont from 'next/font/local';
// import { useEffect, useState } from "react";
// // import { Signup } from '/src/app/Signup/page.js';

// const links = [
//     {
//         id: 1,
//         title: "Toolbeng Ride",
//         url: "/Ride",
//     },
//     {
//         id: 2,
//         title: "Toolbeng Car",
//         url: "/Car",
//     },
//     {
//         id: 3,
//         title: "Toolbeng Service",
//         url: "/Service",
//     },
//     {
//         id: 4,
//         title: "Toolbeng Shop",
//         url: "/Shop",
//     },
// ]

const accounts = [
  {
    id: 1,
    title: 'Create Account',
    url: '/Signup',
  },
];

const lun = localFont({ src: '/lunema-regular.ttf' });
const me = localFont({ src: '/MonumentExtended-Ultrabold.otf' });

// const Navbar = () => {
//     const [isMobile, setIsMobile] = useState(false);
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 768);
//         };

//         handleResize();
//         window.addEventListener("resize", handleResize);
//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);

//     const toggleMobileMenu = () => {
//         setMobileMenuOpen(!mobileMenuOpen);
//     };

//     return (
//         <div className="bg-slate-gray p-4">
//             <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                     <img src="logo.png" alt="logo" className="h-9 w-9 mr-2" />
//                     <a href="/" className={me.className + " text-sSize"}>
//                         ToolBeng
//                     </a>
//                 </div>
//                 {isMobile ? (
//                     <button
//                         onClick={toggleMobileMenu}
//                         className="text-sSize"
//                     >
//                         Menu
//                     </button>
//                 ) : (
//                     <h2 className="text-sSize flex space-x-4">
//                         {links.map(link => (
//                             <Link
//                                 className={lun.className + " hover:text-gray-300"}
//                                 key={link.id}
//                                 href={link.url}
//                             >
//                                 {link.title}
//                             </Link>
//                         ))}
//                     </h2>
//                 )}

//                 {/* <div>
//                     <a href="signup.js"
//                         className={`text-sSize bg-toolbeng-blue text-white px-4 py-2 rounded hover:bg-blue-700 ${lun.className}`}
//                     >
//                         Create Account
//                     </a>
//                 </div> */}
//                 <div>
//                     {accounts.map(account => (
//                         <Link
//                             class={`text-sSize bg-toolbeng-blue text-white px-4 py-2 rounded hover:bg-blue-700 ${lun.className}`}
//                             key={account.id}
//                             href={account.url}>
//                                 {account.title}
//                         </Link>
//                     ))}
//                 </div>
//             </div>

//             {isMobile && mobileMenuOpen && (
//                 <div className="mobile-menu">
//                     {links.map(link => (
//                         <Link
//                             className="block text-sSize mb-2"
//                             key={link.id}
//                             href={link.url}
//                         >
//                             {link.title}
//                         </Link>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Navbar;

// "use client";
import Image from 'next/image';
/* eslint-disable react/jsx-no-undef */
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from 'public/darrell/Logo.svg';
import hamburger from 'public/darrell/hamburger-menu.svg';
import close from 'public/darrell/close.svg';
import styles from './responsive.module.css';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className={`${styles.nav} w-full bg-[#708090] fixed top-0 left-0 right-0 z-[60]`}>
        <div className="justify-between px-2 mx-auto lg:max-w-full md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:py-2 md:block">
              {/* Logo */}
              <Link href="/">
                <Image src={Logo} className="max-w-[125px] md:max-w-[150px]" />
              </Link>
              {/* Hamburger Button Mobile */}
              <div className="md:hidden">
                <button className="p-2 text-gray-700 rounded-md outline-none focus:border focus:border-gray-400" onClick={() => setNavbar(!navbar)}>
                  <Image src={hamburger} width={30} height={30} alt="logo" className="focus:border-none active:border-none" />
                </button>
              </div>
            </div>
          </div>
          <div className={`${styles.navbar} relative`}>
            <div
              className={`${styles.babi} flex-1 fixed bg-white sm:static justify-self-center pb-3 md:block md:pb-0 top-0 left-0 right-0 md:bg-transparent text-black md:text-white h-[24rem] md:h-auto ${
                navbar ? 'px-5 py-16 md:p-0 block' : 'hidden'
              }`}
            >
              <button className="absolute top-2 left-2 p-2 md:hidden text-gray-700 rounded-md outline-none focus:border focus:border-gray-400" onClick={() => setNavbar(!navbar)}>
                <Image src={close} width={30} height={30} alt="logo" />
              </button>

              {/* Navbar Menu */}
              {/* <ul className={`${lun.className} md:h-auto items-center justify-center flex flex-col gap-2 md:flex-row`}>
                <li className="text-md py-2 md:py-1.5 w-full md:w-auto md:px-6 text-center border-2 rounded-xl md:border-0  hover:bg-[#0A3771] border-[#0A3771] hover:text-white md:hover:text-white md:hover:bg-[#8d99a6]">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="text-md py-2 md:py-1.5 w-full md:w-auto md:px-6 text-center border-2 rounded-xl md:border-0  hover:bg-[#0A3771] border-[#0A3771] hover:text-white md:hover:text-white md:hover:bg-[#8d99a6]">
                  <Link href="/account" onClick={() => setNavbar(!navbar)}>
                    Your Account
                  </Link>
                </li>
                <li className="text-md py-2 md:py-1.5 w-full md:w-auto md:px-6 text-center border-2 rounded-xl md:border-0  hover:bg-[#0A3771] border-[#0A3771] hover:text-white md:hover:text-white md:hover:bg-[#8d99a6]">
                  <Link href="/responsivebike" onClick={() => setNavbar(!navbar)}>
                    Toolbeng Ride
                  </Link>
                </li>
                <li className="text-md py-2 md:py-1.5 w-full md:w-auto px-6 text-center border-2 rounded-xl md:border-0  hover:bg-[#0A3771]  border-[#0A3771] hover:text-white md:hover:text-white md:hover:bg-[#8d99a6]">
                  <Link href="/responsivecar" onClick={() => setNavbar(!navbar)}>
                    Toolbeng Car
                  </Link>
                </li>
                <li className="text-md py-2 md:py-1.5 w-full md:w-auto px-6 text-center border-2 rounded-xl md:border-0  hover:bg-[#0A3771]  border-[#0A3771] hover:text-white md:hover:text-white md:hover:bg-[#8d99a6]">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Toolbeng Service
                  </Link>
                </li>
                <li className="text-md py-2 md:py-1.5 w-full md:w-auto px-6 text-center border-2 rounded-xl md:border-0  hover:bg-[#0A3771]  border-[#0A3771] hover:text-white md:hover:text-white md:hover:bg-[#8d99a6]">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Toolbeng Shop
                  </Link>
                </li>
              </ul> */}

              <div>
                {accounts.map((account) => (
                  <Link class={`text-sSize bg-toolbeng-blue text-white px-4 py-2 rounded hover:bg-blue-700 ${lun.className}`} key={account.id} href={account.url}>
                    {account.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="hidden md:flex md:flex-wrap md:justify-center">
            <div className="w-6/12 sm:w-4/12 px-4">
              <Image
                src={profile}
                alt="..."
                className="shadow rounded-full md:max-w-[45px] h-auto align-middle border-none"
              />
            </div>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
