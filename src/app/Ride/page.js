"use client"
import React, { useState } from "react";
import styles from "./responsivebike.module.css";
import Car2 from "public/darrell/car2.svg";
import Image from "next/image";
import Button from "public/darrell/Button.svg";
import pana from "public/darrell/pana.svg";
import FormCar from "@/components/formCar/FormCar";
import orderPost from "@/apiorder/order";
import API_BASE_URL from '@/apiorder/const';
import Background from "@/components/background/Background";
import localFont from "next/font/local";
import Link from "next/link";

const lun = localFont({ src: "/lunema-regular.ttf" });
const me = localFont({ src: "/MonumentExtended-Ultrabold.otf" });

const Ride = () => {
  const [showFormCar, setShowCar] = useState(false);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [location, setLocation] = useState();
  const [tipe_kendaraan, setTipe] = useState();
  const [nomor_polisi, setNomor] = useState();
  const [kondisi, setKondisi] = useState();
  const [keterangan, setKeterangan] = useState();
  const [ban_bocor, setBan] = useState(false);
  return (
    <div>
      <Background/>
    <div className="px-5 md:px-12 pt-6">
      <div className="flex flex-col">
      <Link href="/">
          <Image src={Button} className="w-20 md:w-28" />
        </Link>
        <div>
          <h1 className={`${styles.h1} pt-6 text-[#252E52] text-2xl md:text-6xl md:max-w-3xl`}>
            Darurat di Jalan? Temukan Bengkel Sekarang!
          </h1>
        </div>
        <div>
          <h3 className={`${styles.p} text-[#454971] text-sm w-96 pt-8 md:text-xl md:w-2/6`}>
            Kami memahami betapa pentingnya perbaikan cepat. Temukan bengkel
            terdekat untuk menyelesaikan masalah mobil Anda dengan mudah.
          </h3>
        </div>
        <div className="flex mx-auto md:flex-none md:mx-0">
        <button 
          className={`${styles.button} text-xl text-white px-4 py-4 md:px-14 md:py-8 md:text-3xl drop-shadow-2xl border-none shadow-inner bg-gradient-to-r from-[rgba(207,148,150,1)] to-[rgba(120,143,175,1)] hover:bg-none hover:bg-[#0A3771] hover:text-white shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)] border rounded-[20px] mt-8`}
          onClick={() => setShowCar(true)}
          >
          Temukan Bengkel Terdekat
        </button>
        </div>
        <div className="flex pb-8 md:flex-none md:absolute md:right-0 md:-bottom-6">
          <Image 
            src={Car2}
            className="pt-7 mx-auto w-3/4 md:w-4/5 md:pt-0"
          />
        </div>
      </div>
      <FormCar isVisible={showFormCar} onClose={() => setShowCar(false)}>
        <form action="">
          <div className="md:flex md:flex-row">
            <div className="md:w-1/2 md:pl-10 md:mr-10">
              <div className="mb-2">
                <label for="name" className="block text-sm font-medium text-white">Nama</label>
                <input type="text" name="" id="name" onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-0.5" placeholder="Nama Lengkap" required/>
              </div>
              <div className="mb-2">
                <label for="phone" className="block text-sm font-medium text-white">Nomor HP/Telepon</label>
                <input type="text" name="" id="phone" onChange={(e) => setPhone(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-0.5" placeholder="Nomor HP/Telepon" required/>
              </div>
              <div className="mb-2">
                <label for="address" className="block text-sm font-medium text-white">Alamat Jemput</label>
                <input type="text" name="" id="address" onChange={(e) => setLocation(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-0.5" placeholder="Alamat Jemput" required/>
              </div>
              <div className="mb-2">
                <label for="type" className="block text-sm font-medium text-white">Tipe Mobil</label>
                <input type="text" name="" id="type" onChange={(e) => setTipe(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-0.5" placeholder="Tipe Mobil" required/>
              </div>
              <div className="mb-2">
                <label for="plate" className="block text-sm font-medium text-white">Nomor Polisi</label>
                <input type="text" name="" id="plate" onChange={(e) => setNomor(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-0.5" placeholder="Nomor Polisi" required/>
              </div>
              <div className="mb-2">
                <label for="condition" className="block text-sm font-medium text-white">Kondisi Mobil</label>
                <input type="text" name="" id="condition" onChange={(e) => setKondisi(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-0.5" placeholder="Kondisi Mobil" required/>
              </div>
              <div className="mb-2">
                <label for="desc" className="block text-sm font-medium text-white">Keterangan Tambahan</label>
                <textarea type="text" name="" id="desc" onChange={(e) => setKeterangan(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-24 px-2 py-0.5" placeholder="Keterangan Tambahan" required/>
              </div>
              <div className="">
                <label className="block text-sm font-medium text-white">Ban Bocor</label>
                <div className="flex items-center">
                  <input type="radio" onChange={(e) => setBan(true)} name="checkbox" id="Ya" />
                  <label for="Ya" className="pr-5">Ya</label>
                  <input type="radio" onChange={(e) => setBan(false)} name="checkbox" id="Tidak" />
                  <label for="Tidak">Tidak</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-2 md:w-1/2">
              <Image
                  src={pana}
                  className="object-contain w-56"
              />
              <button 
                className={`${styles.button} bg-[#AD4043] px-4 py-2 rounded-lg mb-2 mt-2 shadow-inner drop-shadow-lg`}
                type="button"
                onClick={() => orderPost(
                  {
                    user_id: 2,
                    bengkel_id: 6,
                    location: location,
                    customer_latitude: -6.3940,
                    customer_longitude: 106.6225,
                    category: 0,
                    tipe_kendaraan: tipe_kendaraan,
                    nomor_polisi: nomor_polisi,
                    kondisi: kondisi,
                    keterangan: keterangan,
                    ban_bocor: ban_bocor
                  }
                )}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </FormCar>
    </div>
    </div>
  );
};

export default Ride;