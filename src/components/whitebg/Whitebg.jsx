"use client"
import React from 'react'
import whitebg from "public/darrell/whitebg.png"
import Image from "next/image";

const Whitebg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-[-10]">
      <Image
        src={whitebg}
        className="w-full h-[100vh] z-[-9]"
      />
    </div>
  );
};

export default Whitebg;