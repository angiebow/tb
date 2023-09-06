"use client"
import React, { useState } from "react";
import localFont from "next/font/local";
import Background from "@/components/background/Background";

const lun = localFont({ src: "/lunema-regular.ttf" });
const me = localFont({ src: "/MonumentExtended-Ultrabold.otf" });

const Payment = () => {
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [banks, setBanks] = useState([]);

    const staticBanks = [
        { id: 1, name: "Cash" },
        { id: 2, name: "BNI" },
        { id: 3, name: "MANDIRI" },
        { id: 4, name: "BCA" },
        { id: 5, name: "BRI" },
    ]

    const openPaymentModal = () => {
        setShowPaymentModal(true);
    };

    const closePaymentModal = () => {
        setShowPaymentModal(false);
    };

    const services = [
        { id: 1, name: "Service A", cost: 50 },
        { id: 2, name: "Service B", cost: 75 },
    ];

    const total = services.reduce((sum, service) => sum + service.cost, 0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen relative"> 
            <Background />
            <div className="absolute top-5 left-5">
                <a
                    href="/"
                    className={`text-black text-lg bg-gray-100 bg-opacity-50 rounded-lg p-3 shadow-md ${lun.className}`}
                >
                    &lt; Home
                </a>
            </div>
            <div className="text-center mt-12">
                <div className={`text-toolbeng-blue text-center text-3xl mb-2 ${me.className}`}> 
                    Kendaraan anda selesai diperbaiki.
                </div>
                <img src="/paypic.svg" alt="payment" className="w-3/5 p-8 mx-auto max-w-screen-md" />
            </div>
            <button className={`px-4 py-2 bg-toolbeng-blue text-white rounded text-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 ${lun.className}`} onClick={openPaymentModal}>
                Lakukan Pembayaran
            </button>

            {showPaymentModal && (
                <div class={`fixed inset-0 flex items-center justify-start bg-transparent ${me.className}`}>
                <div className="ml-4 flex flex-col bg-white p-6 rounded-md relative bg-toolbeng-blue bg-opacity-50">
                    <button
                        className={`self-start mb-1 px-4 py-2 bg-white text-toolbeng-blue rounded rounded-lg text-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 ${lun.className}`}
                        onClick={closePaymentModal}
                    >
                        X
                    </button>
                    
                    {/* Bill */}
                    <div className="mt-1">
                        <ul className="text-black">
                            {services.map(service => (
                                <li key={service.id} className="bg-white rounded p-2 my-2 flex justify-between">
                                    <span>{service.name}</span>
                                    <span>Rp {service.cost}.000</span>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-white rounded p-2 text-black flex justify-between mt-2 font-bold">
                            <span>Total:</span>
                            <span>Rp {total}.000</span>
                        </div>
                    </div>
                    
                    <div className="mt-3">
                        <p className="justify-center items-center flex text-black mb-2 pt-3">Pilih metode pembayaran</p>
                        <div className="grid grid-cols-2 gap-2">
                            {staticBanks.map(bank => (
                                <button key={bank.id} class={`bg-white text-black px-4 py-2 rounded-md hover:bg-toolbeng-blue hover:text-white`}>
                                    {bank.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={`mt-2 py-2 bg-toolbeng-red text-white rounded text-kSize hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 ${lun.className}`}
                    >Bayar</button>
                    <img src="/option.svg" alt="pay" className="w-3/5 p-8 mx-auto max-w-screen-md mt-1" />
                </div>
            </div>
            )}
        </div>
    );
}

export default Payment;