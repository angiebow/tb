'use client';
import React from 'react';
import { io } from 'socket.io-client';

export const socket = io.connect('https://toolbeng.fly.dev');
export const SocketContext = React.createContext(socket);
