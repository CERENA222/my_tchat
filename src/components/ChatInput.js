import React, { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() !== '') {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="chat-input-form">
            <input
                type="text"
                value={message}
                onChange={handleChange}
                placeholder="Type your message..."
                className="chat-input-field"
            />
            <button type="submit" className="send-button">Send</button>
        </form>
    );
};

export default ChatInput;
