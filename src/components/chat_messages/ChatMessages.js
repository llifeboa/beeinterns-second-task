import React from 'react';
import './ChatMessages.css';
import Avatar from '../../img/avatar_1.svg';
function ChatMessages(props) {
	const list = props.messageList.map(item => {
		return (
			<div className="message" key={item.id}>
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
