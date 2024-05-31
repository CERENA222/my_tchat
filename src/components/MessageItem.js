import React from 'react';

const MessageItem = ({ message, currentUser }) => {
    const isSent = message.sender === currentUser;

    return (
        <div className={`message-item ${isSent ? 'sent' : 'received'}`}>
            <div className="message-content">{message.content}</div>
            <div className="message-info">{message.sender} - {new Date(message.timestamp).toLocaleTimeString()}</div>
        </div>
    );
};

export default MessageItem;
