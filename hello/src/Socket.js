// WebSocketComponent.js

import React, { useEffect } from 'react';

const WebSocketComponent = () => {
    useEffect(() => {
        // Your WebSocket URL
        const socketUrl = 'wss://ketomotors.in';

        // Create a new WebSocket instance
        const socket = new WebSocket(socketUrl);

        // Event listener for when the connection is opened
        socket.addEventListener('open', (event) => {
            console.log('WebSocket connection opened:', event);
        });

        // Event listener for when a message is received from the server
        socket.addEventListener('message', (event) => {
            console.log('Message from server:', event.data);
            // Handle the received message as needed
        });

        // Event listener for when the connection is closed
        socket.addEventListener('close', (event) => {
            console.log('WebSocket connection closed:', event);
        });

        // Clean up the WebSocket connection on component unmount
        return () => {
            socket.close();
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <div>
            {/* Your component JSX */}
        </div>
    );
};

export default WebSocketComponent;
