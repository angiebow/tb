import Footer from "@/components/footer/Footer"
import React from 'react'
import localFont from "next/font/local";
import Whitebg from "@/components/whitebg/Whitebg";

const lun = localFont({ src: '/lunema-regular.ttf' });
const me = localFont({ src: '/monumentextendedreg.otf' });

const Contact = () => {
  return (
    <div className="">
      <Whitebg />
      <div className="flex flex-col justify-center items-center max-w-xs mx-auto md:w-full">
        <h1 className={`${me.className} text-black text-xl mt-12 mb-6`}>Contact Us</h1>
        <div className="border border-slate-400 rounded-xl shadow-inner md:w-max drop-shadow-xl bg-[#EDF5F8] bg-opacity-30 overflow-hidden px-4 py-6">
          <form>
            <div className={`${lun.className}`}>
              <div className="flex flex-row">
                <div className="px-1 mb-2">
                  <label for="name" className="block text-xs text-black">First Name</label>
                  <input type="text" id="name" className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-0.5" placeholder="First Name" required/>
                </div>
                <div className="px-1 mb-2">
                  <label for="name" className="block text-xs text-black">Last Name</label>
                  <input type="text" id="name" className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-0.5" placeholder="Surname" required/>
                </div>
              </div>
              <div className="md:flex md:flex-row">
                <div className="px-1 mb-2">
                    <label for="email" className="block text-xs text-black">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-0.5" placeholder="Email" required/>
                </div>
                <div className="px-1  mb-2">
                    <label for="number" className="block text-xs text-black">Phone Number</label>
                    <input type="text" id="number" className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-0.5" placeholder="Phone Number" required/>
                </div>
              </div>
              <div className="px-1 mb-2">
                  <label for="name" className="block text-xs text-black">Choose a Topic</label>
                  <select type="text" id="topic" className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1" placeholder="Please select one" required>
                    <option value="ride" className="text-gray-400">Toolbeng Ride</option>
                    <option value="car" className="text-gray-400">Toolbeng Car</option>
                  </select>
              </div>
              <div className="px-1 mb-4">
                  <label for="number" className="block text-xs text-black">Message</label>
                  <textarea type="text" name="" id="desc" className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-20 px-2 py-0.5" placeholder="Keterangan Tambahan" required/>
              </div>
              <div className="flex justify-center items-center text-black text-xs mb-2 md:text-base md:mt-6">
                <input type="radio" name="checkbox" id="Ya"/>
                <label for="Ya" className="px-2">I accept the Terms</label>
              </div>
              <div className="flex justify-center">
                <button 
                  className={` bg-[#0A3771] px-4 py-2 md:mt-6 md:text-base rounded-lg mt-2 shadow-inner drop-shadow-lg`}
                  type="button">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;