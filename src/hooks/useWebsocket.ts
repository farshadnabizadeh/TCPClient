import { useState, useEffect } from 'react';

type MessageHandler = (data: string) => void;

const useWebSocket = (url: string, onMessage?: MessageHandler) => {
    const [webSocket, setWebSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const connection = new WebSocket(url);

        connection.onopen = () => {
            console.log("Connection established");
            // If you need to send a message on connection, do it here
            // connection.send('your message');
        };

        connection.onerror = (error: Event) => {
            console.error("WebSocket Error: ", error);
        };

        connection.onmessage = (event: MessageEvent) => {
            if (onMessage) onMessage(event.data);
        };

        connection.onclose = () => {
            console.log("Connection closed");
        };

        setWebSocket(connection);

        // Clean up on unmount
        return () => {
            connection.close();
        };
    }, [url, onMessage]);

    return webSocket;
};

export default useWebSocket;
