import React, { useEffect } from 'react';
import './ChatMessages.css';
import AvatarUser from '../../img/avatar_user.svg';
import AvatarBot from '../../img/avatar_bot.svg';
function ChatMessages(props) {
	useEffect(() => {
		const chatMessages = document.querySelector('.chat-messages');
		chatMessages.scrollTop = 9999999;
	});

	const list = props.messageList.map(item => {
		return (
			<div
				className={[
					'message',
					'animation-slide-left',
					!item.isUser ? 'animation-d0_3' : '',
				].join(' ')}
				key={item.id}
			>
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

	const writeAnimation = (
		<div className={['message', 'animation-slide-left'].join(' ')}>
			<div className="message__avatar">
				<img src={AvatarUser} alt="avatar"></img>
			</div>
			<div className={['message__text'].join(' ')}>
				<p>
					<span className="message__dot animation-wave">.</span>
					<span className="message__dot animation-wave animation-d0_2">
						.
					</span>
					<span className="message__dot animation-wave animation-d0_4">
						.
					</span>
				</p>
			</div>
		</div>
	);

	return (
		<div className="chat-messages">
			<div className="chat-messages__list">
				{props.isInputFocused ? writeAnimation : null}
				{list}
			</div>
		</div>
	);
}

export default ChatMessages;
