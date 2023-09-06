'use client';
import API_BASE_URL from '@/apiorder/const';
import { SocketContext } from '@/context/socket';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import localFont from 'next/font/local';
import Image from 'next/image';
import Logo from 'public/darrell/Logo.svg';
import Back from 'public/darrell/Arrow-45.svg';
import Link from 'next/link';
import AccordionItem from './AccordionItem';

const lun = localFont({ src: '/lunema-regular.ttf' });

export default function Chat(params) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const socket = useContext(SocketContext);
  const room = params.room;
  const [msg, setMsg] = useState();
  const [msgReceived, setMsgReceived] = useState(params.msg);
  const sendMessage = () => {
    socket.emit('send message', { msg, room });
    setMsgReceived((prev) => [...prev, { message: msg, sendByCust: params.isCust }]);
    axios
      .post(`${API_BASE_URL}/chat`, {
        order_id: room,
        sendByCust: params.isCust,
        message: msg,
      })
      .then((res) => console.log(res));
    setMsg('');
  };

  useEffect(() => {
    // console.log(msgReceived);
    socket.on('chat message', (msg) => {
      // console.log(msg);
      setMsgReceived((prev) => [...prev, { message: msg, sendByCust: !params.isCust }]);
    });
  }, [socket]);

  return (
    <>
      <nav className="flex miniPhone:justify-between tablet:justify-start">
        <Link href="/">
          <button className="m-6 miniPhone:m-2.5 miniPhone:w-6 miniPhone:h-6 tablet:w-8 laptop:w-10">
            <Image src={Back} height={40} width={40} alt="Arrow" />
          </button>
        </Link>
        <Image src={Logo} className=" miniPhone:w-20 mr-2.5 tablet:w-24 laptop:w-32" alt="Logo" />
      </nav>
      <div className="container mx-auto pb-4 ">
        <div className="flex miniPhone:gap-4 desktop:flex-row laptop:flex-row tablet:flex-row miniPhone:gap-x-4 miniPhone:h-full miniPhone:flex-col tablet:w-full miniPhone:w-11/12 laptop:w-11/12  miniPhone:mx-auto">
          <div className="basis-1/3 bg-white rounded-lg flex flex-col miniPhone:p-3 drop-shadow-md ">
            {/* photo and text row 1*/}
            <div className="flex flex-row justify-items-center tablet:justify-normal miniPhone:justify-between">
              <div className="relative miniPhone:w-20 miniPhone:h-20 tablet:w-12 tablet:h-12 laptop:w-20 laptop:h-20 rounded-full border overflow-hidden flex justify-center">
                <Image src="/darrell/yudha.png" alt="Profile" layout="fill" objectFit="cover" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex desktop:text-nSize tablet:text-cSize laptop:text-kSize text-black miniPhone:text-cSize">
                  <h1 className={`${lun.className} tablet:pl-2`}>
                    Selamat Datang, <br className="tablet:flex miniPhone:hidden" />
                    Jane Doe!
                  </h1>
                </div>
                <div className={`${lun.className} flex justify-center desktop:text-rSize tablet:text-mSize miniPhone:text-kSize font-bold text-black tablet:hidden miniPhone:flex`}>Bantuan Segera Datang.</div>
              </div>
            </div>

            {/* row 2*/}
            <div className={`${lun.className} flex justify-center desktop:text-rSize tablet:text-aSize laptop:text-nSize font-bold text-black tablet:pb-3 first-line:pb-6 tablet:flex miniPhone:hidden`}>Bantuan Segera Datang.</div>

            {/* row 3*/}
            <div className="flex tablet:gap-2 miniPhone:flex-row miniPhone:text-cSize miniPhone:justify-between miniPhone:border-none tablet:flex-col ">
              <div className="basis-1/3 tablet:border border-blue-border-toolbeng rounded-lg flex miniPhone:flex-col tablet:flex-row tablet:justify-between miniPhone:justify-normal p-2 ">
                <button className="tablet:text-vSize laptop:text-cSize text-black tablet:w-full flex justify-start">Peta</button>
                <p className="tablet:text-vSize text-black">A</p>
              </div>
              <div className="basis-1/3 miniPhone:rounded-t-full tablet:rounded-lg tablet:border border-blue-border-toolbeng rounded-lg flex miniPhone:flex-col tablet:flex-row tablet:justify-between miniPhone:justify-normal p-2 bg-gradient-to-r from-purple-background-toolbeng to-salmon-background-toolbeng">
                <button className="tablet:text-vSize laptop:text-cSize text-white tablet:w-full flex justify-start">Chat</button>
                <p className="tablet:text-vSize text-black">A</p>
              </div>
              <div className="basis-1/3 tablet:border border-blue-border-toolbeng rounded-lg flex miniPhone:flex-col tablet:flex-row tablet:justify-between miniPhone:justify-normal p-2">
                <button className="tablet:text-vSize laptop:text-cSize text-black tablet:w-full flex justify-start">Telp</button>
                <p className="tablet:text-vSize text-black">A</p>
              </div>
            </div>
          </div>
          <div className=" basis-2/3 drop-shadow-md flex desktop:flex-row tablet:flex-row lg:flex-row rounded-lg sm:flex-col miniPhone:flex-col bg-purple-chat-toolbeng border-transparent">
            <div className="w-full miniPhone:hover:from-slate-400 miniPhone:hover:to-slate-400 flex miniPhone:rounded-t-lg tablet:rounded-lg tablet:basis-1/3 miniPhone:flex-row tablet:flex-col bg-gradient-to-t from-red-background-toolbeng to-blue-background-toolbeng tablet:hover:bg-gradient-to-t tablet:hover:from-red-background-toolbeng tablet:hover:to-blue-background-toolbeng tablet:p-4 miniPhone:p-3 ">
              <div className="miniPhone:rounded-full relative tablet:w-full tablet:h-24 laptop:h-40 tablet:rounded-lg overflow-hidden drop-shadow-md  miniPhone:w-6 miniPhone:h-6">
                <Image className="" src="/darrell/yudha.jpeg" alt="Profile" layout="fill" objectFit="cover" />
              </div>

              <div className={`${lun.className} flex desktop:text-rSize tablet:text-kSize font-bold text-red-text-toolbeng miniPhone:pl-2 laptop:text-nSize tablet:pl-0`}>Laras Jaya Motor</div>
              <div className={`${lun.className} flex desktop:text-sSize tablet:text-vSize font-bold text-black desktop:flex miniPhone:flex tablet:flex laptop:text-cSize`}>
                Jl. Wonokusumo No.136, Pegirian, Kec. Semampir, Surabaya, Jawa Timur 60153
              </div>
            </div>

            {/* <button className="tablet:hidden miniPhone:flex" onClick={toggle}>
              <div className="w-full miniPhone:hover:from-slate-400 miniPhone:hover:to-slate-400 flex miniPhone:rounded-t-lg tablet:rounded-lg tablet:basis-1/3 miniPhone:flex-row tablet:flex-col bg-gradient-to-t from-red-background-toolbeng to-blue-background-toolbeng tablet:hover:bg-gradient-to-t tablet:hover:from-red-background-toolbeng tablet:hover:to-blue-background-toolbeng tablet:p-4 miniPhone:p-3 ">
                <div className="miniPhone:rounded-full relative tablet:w-full tablet:h-24 laptop:h-40 tablet:rounded-lg overflow-hidden drop-shadow-md  miniPhone:w-6 miniPhone:h-6">
                  <Image className="" src="/darrell/yudha.jpeg" alt="Profile" layout="fill" objectFit="cover" />
                </div>

                <div className={`${lun.className} flex desktop:text-rSize tablet:text-kSize font-bold text-red-text-toolbeng miniPhone:pl-2 laptop:text-nSize tablet:pl-0`}>Laras Jaya Motor</div>
              </div>
              {open && (
                <AccordionItem open={open} toggle={toggle}>
                  <div className={`${lun.className} flex desktop:text-sSize tablet:text-vSize font-bold text-black desktop:flex miniPhone:flex tablet:flex laptop:text-cSize`}>
                    Jl. Wonokusumo No.136, Pegirian, Kec. Semampir, Surabaya, Jawa Timur 60153
                  </div>
                </AccordionItem>
              )}
            </button> */}
            <div className="tablet:basis-2/3 gap-2 tablet:pb-6 miniPhone:pb-4 pt-4 flex flex-col ">
              <div className="px-4 pb-2 overflow-y-auto h-96 ">
                {msgReceived.map((e, index) => (
                  <div key={index} className={`flex ${e.sendByCust === params.isCust ? 'justify-end ' : 'justify-start'} mt-2  `}>
                    <div
                      className={`p-3 laptop:text-aSize miniPhone:text-cSize ${
                        e.sendByCust === params.isCust
                          ? ' bg-bubblechat-blue-toolbeng text-white desktop:ml-24 tablet:ml-8 miniPhone:ml-5 rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl'
                          : ' desktop:mr-24 tablet:mr-8 miniPhone:mr-5 bg-white rounded-br-3xl rounded-tl-3xl rounded-tr-3xl text-black'
                      }`}
                    >
                      {e.message}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mx-4 bg-white rounded-full tablet:mt-4 miniPhone:mt-1">
                <input
                  className="miniPhone:text-cSize tablet:text-aSize focus:outline-none rounded-full w-5/6 border-slate-200 placeholder-slate-400 tablet:p-3 miniPhone:p-2 text-black"
                  placeholder="message.."
                  onChange={(e) => setMsg(e.target.value)}
                  value={msg}
                />
                <button className="w-1/6 text-black miniPhone:text-cSize tablet:text-aSize" onClick={sendMessage}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
