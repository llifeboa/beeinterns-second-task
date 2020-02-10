import React, { useContext, useState } from 'react';
import './ChatInput.css';
import Send from '../../img/seng.svg';
import MessageContext from '../chat_bot/MessageContext.js';

function ChatInput() {
	const [command, commandSet] = useState('');
	const sendMessage = useContext(MessageContext);
	return (
		<form>
			<div className="chat-input">
				<input
					className="chat-input__message"
					value={command}
					onChange={e => commandSet(e.target.value)}
					type="text"
				></input>
				<button
					className="chat-input__send"
					onClick={e => {
						e.preventDefault();
						sendMessage(command);
						commandSet('');
					}}
				>
					<img src={Send} alt="send"></img>
				</button>
			</div>
		</form>
	);
}

export default ChatInput;
