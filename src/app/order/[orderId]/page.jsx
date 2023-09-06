'use client';
import API_BASE_URL from '@/apiorder/const';
import Background from '@/components/background/Background';
import Chat from '@/components/chat';
import ChatAdmin from '@/components/chatAdmin';
import { SocketContext } from '@/context/socket';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Page({ params }) {
  const role = useSearchParams().get('role');
  console.log(role);
  console.log('params', params);
  const Socket = useContext(SocketContext);
  Socket.emit('join-room', params.orderId);
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`${API_BASE_URL}/chat/${params.orderId}`).then((result) => {
      setData(result.data.data);
    });
  }, []);
  console.log(data);
  return (
    <div className="tablet:h-screen miniPhone:h-full bg-gradient-to-r from-[#CF9497] to-[#7B91B0] via-white">
      {/* <Background /> */}
      <SocketContext.Provider value={Socket}>{data ? <ChatAdmin room={params.orderId} msg={data} isCust={role == 'B'} /> : null}</SocketContext.Provider>
    </div>
  );
}
