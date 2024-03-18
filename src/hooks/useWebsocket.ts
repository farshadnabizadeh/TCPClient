import { useState, useEffect, useRef } from 'react';

export type MessageHandler = (data: string) => void;

const useWebSocket = (
    url: string,
    onMessage?: MessageHandler,
    onClose?: (event: CloseEvent) => void
) => {
    const webSocketRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        const connection = new WebSocket(url);
        webSocketRef.current = connection;

        connection.onopen = () => console.log("Connection established");

        connection.onerror = (error: Event) => console.error("WebSocket Error: ", error);

        connection.onmessage = (event: MessageEvent) => {
            if (onMessage) onMessage(event.data);
        };

        connection.onclose = (event: CloseEvent) => {
            console.log("Connection closed", event.code, event.reason);
            if (onClose) onClose(event);
        };

        return () => {
            connection.close();
        };
    }, [url]);

    return webSocketRef.current;
};

export default useWebSocket;
