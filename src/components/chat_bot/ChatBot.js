import React from 'react';
import './ChatBot.css';
import ChatInput from '../chat_input/ChatInput.js';
import ChatMessages from '../chat_messages/ChatMessages.js';

function ChatBot() {
	return (
		<div className="chat-bot">
			<header>
				<span className="chat-bot__header">Чат-бот</span>
			</header>
			<div className="chat-bot__wrapper">
				<ChatMessages></ChatMessages>
				<ChatInput></ChatInput>
			</div>
		</div>
	);
}

export default ChatBot;
