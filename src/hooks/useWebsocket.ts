import { useEffect, useRef } from 'react';

const useWebSocket = (url: string, onMessage: (data: string) => void) => {
    const webSocketRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        try {
            const socket = new WebSocket(url);
            webSocketRef.current = socket;

            socket.onopen = () => console.log("WebSocket connected");
            socket.onmessage = (event) => onMessage(event.data);
            socket.onerror = (error) => console.error("WebSocket error:", error);
            socket.onclose = () => console.log("WebSocket disconnected");

            return () => {
                if (socket.readyState === WebSocket.OPEN) {
                    socket.close();
                }
            };
        } catch (error) {
            console.error("WebSocket initialization error:", error);
        }
    }, [url, onMessage]);

    return webSocketRef.current;
};

export default useWebSocket;
