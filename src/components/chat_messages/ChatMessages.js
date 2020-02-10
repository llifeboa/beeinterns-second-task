import React from 'react';
import './ChatMessages.css';
import AvatarUser from '../../img/avatar_user.svg';
import AvatarBot from '../../img/avatar_bot.svg';
function ChatMessages(props) {
	const list = props.messageList.map(item => {
		return (
			<div className="message" key={item.id}>
				<div className="message__avatar">
					<img
						src={item.isUser ? AvatarUser : AvatarBot}
						alt="avatar"
					></img>
				</div>
				<div
					className={[
						'message__text',
						!item.isUser ? 'message__text_white' : '',
					].join(' ')}
				>
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
