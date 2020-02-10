import React, { useState, useEffect } from 'react';
import './ChatMessages.css';
import Avatar from '../../img/avatar_1.svg';
function ChatMessages() {
	const [messageList, messageListSet] = useState([
		{
			text: '/number',
		},
		{
			text: '/number',
		},
		{
			text: '/number',
		},
	]);
	const list = messageList.map(item => {
		return (
			<div className="message">
				<div className="message__avatar">
					<img src={Avatar} alt="avatar"></img>
				</div>
				<div className="message__text">
					<p>{item.text}</p>
				</div>
			</div>
		);
	});
	return (
		<div className="chat-messages">
			<div className="chat-messages__list">{list}</div>
		</div>
	);
}

export default ChatMessages;
