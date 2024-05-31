import React, { useEffect, useState } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const currentUser = 'user1'; // Remplacez par l'utilisateur connecté

    // Effet pour récupérer les messages (simulé pour l'exemple)
    useEffect(() => {
        // Simuler la récupération des messages depuis le serveur
        const simulateMessageFetch = setTimeout(() => {
            const mockMessages = [
                { id: 1, sender: 'user1', content: 'Hello', timestamp: '2024-05-31T12:00:00' },
                { id: 2, sender: 'user2', content: 'Hi there!', timestamp: '2024-05-31T12:01:00' },
                { id: 3, sender: 'user1', content: 'How are you?', timestamp: '2024-05-31T12:02:00' },
            ];
            setMessages(mockMessages);
        }, 1000);

        return () => clearTimeout(simulateMessageFetch);
    }, []);

    const handleSendMessage = (content) => {
        // Simuler l'envoi du message au serveur
        const newMessage = {
            id: messages.length + 1,
            sender: currentUser,
            content,
            timestamp: new Date().toISOString()
        };
        setMessages([...messages, newMessage]);
    };

    return (
        <div>
            <h1>Chat App</h1>
            <MessageList messages={messages} currentUser={currentUser} />
            <ChatInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default Chat;
