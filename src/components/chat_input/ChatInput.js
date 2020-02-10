import React from 'react';
import './ChatInput.css';
import Send from '../../img/seng.svg';

function ChatInput() {
	return (
		<form>
			<div className="chat-input">
				<input className="chat-input__message" type="text"></input>
				<button className="chat-input__send">
					<img src={Send} alt="send"></img>
				</button>
			</div>
		</form>
	);
}

export default ChatInput;
