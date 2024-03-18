import { useState, useEffect } from 'react';

const useWebSocket = (url:any, onMessage:any) => {
    useEffect(() => {
        try {
            const socket = new WebSocket(url);

            socket.onopen = () => console.log("WebSocket connected");
            socket.onmessage = (event) => onMessage(event.data);
            socket.onerror = (error) => console.error("WebSocket error:", error);
            socket.onclose = () => console.log("WebSocket disconnected");

            return () => socket.close();
        } catch (error) {
            console.error("WebSocket initialization error:", error);
        }
    }, [url, onMessage]);
};


export default useWebSocket;