// WebSocketComponent.js

import React, { useEffect, useState } from 'react';

const WebSocketComponent = () => {
    const [receivedData, setReceivedData] = useState(null);

    useEffect(() => {
        const socketUrl = 'wss://ketomotors.in:8500/ws';

        const socket = new WebSocket(socketUrl);

        socket.addEventListener('open', (event) => {
            console.log('WebSocket connection opened:', event);
        });

        socket.addEventListener('message', (event) => {
            // Parse the received JSON data
            const parsedData = JSON.parse(event.data);
            console.log('Message from server:', parsedData);

            // Update the component state with the received data
            setReceivedData(parsedData);
        });

        socket.addEventListener('close', (event) => {
            console.log('WebSocket connection closed:', event);
        });

        // Clean up the WebSocket connection on component unmount
        return () => {
            socket.close();
        };
    }, []);

    return (
        <div>
            <h2>Received Data:</h2>
            {receivedData ? (
                <pre>{JSON.stringify(receivedData, null, 2)}</pre>
            ) : (
                <p>No data received yet.</p>
            )}
        </div>
    );
};

export default WebSocketComponent;
