import React, { useContext, useState } from 'react';
import './ChatInput.css';
import MessageContext from '../chat_bot/MessageContext.js';

function ChatInput() {
	const [command, commandSet] = useState('');
	const [sendMessage, isInputFocusedSet] = useContext(MessageContext);
	return (
		<form>
			<div className="chat-input">
				<input
					className="chat-input__message"
					value={command}
					onChange={e => {
						commandSet(e.target.value);
						if (e.target.value !== '') isInputFocusedSet(true);
						else isInputFocusedSet(false);
					}}
					type="text"
				></input>
				<button
					className={[
						'chat-input__send',
						command ? 'chat-input__send_active' : '',
					].join(' ')}
					onClick={e => {
						e.preventDefault();
						isInputFocusedSet(false);
						if (command !== '') sendMessage(command);
						commandSet('');
					}}
					disabled={!command}
				></button>
			</div>
		</form>
	);
}

export default ChatInput;
