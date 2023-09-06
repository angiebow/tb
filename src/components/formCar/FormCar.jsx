"use client";
import Image from "next/image";
/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import React, { useState } from "react";
import Logo from "public/darrell/Logo.svg";
import close from "public/darrell/Frame 262.svg";
import styles from './formcar.module.css'

const FormCar = ({ isVisible, onClose, children }) => {
  if ( !isVisible ) return null;

  const handleClose = (e) => {
    if( e.target.id === 'wrapper' ) onClose();
  }

  return (
    <div className={`${styles.all} fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center`} id="wrapper" onClick={handleClose}>
      <div className="w-80 md:w-full md:max-w-4xl flex flex-col">
        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-3 mt-16 rounded-xl border border-[#0A3771] border-opacity-20">
          <button onClick={() => onClose()}>
            <Image
              src={close}
              className="w-6 md:w-10"
            />
          </button>
          {children}
        </div>
      </div>
    </div>
  )
}

export default FormCar;