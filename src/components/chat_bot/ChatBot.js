import React, { useState } from 'react';
import './ChatBot.css';
import ChatInput from '../chat_input/ChatInput.js';
import ChatMessages from '../chat_messages/ChatMessages.js';
import ChatBotApi from '../../api/ChatBotApi.js';
import MessageContext from './MessageContext.js';

function ChatBot() {
	const [chatBotApi] = useState([ChatBotApi({ debug: true })]);
	const [messageList, messageListSet] = useState([]);
	const sendCommand = command => {
		const response = chatBotApi[0](command);
		messageListSet([
			{ text: response, id: [messageList.length + 1], isUser: false },
			{ text: command, id: [messageList.length], isUser: true },
			...messageList,
		]);
	};
	return (
		<div className="chat-bot">
			<header>
				<span className="chat-bot__header">Чат-бот</span>
			</header>
			<div className="chat-bot__wrapper">
				<ChatMessages messageList={messageList}></ChatMessages>
				<MessageContext.Provider value={sendCommand}>
					<ChatInput></ChatInput>
				</MessageContext.Provider>
			</div>
		</div>
	);
}

export default ChatBot;
