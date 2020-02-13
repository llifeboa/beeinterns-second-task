function ChatBotApi({ debug } = { debug: false }) {
	let isStart = false;
	let numbers = [];
	return function(command) {
		if (debug) console.log('before: ', isStart, numbers);
		let response = 'Я не понимаю, введите другую команду!';
		if (!isStart && /^\/start$/.test(command)) {
			isStart = true;
			response = 'Привет, меня зовут Чат-бот, а как зовут тебя?';
		} else if (!isStart) {
			response = 'Введите команду /start, для начала общения';
		} else if (isStart && /^\/stop$/.test(command)) {
			isStart = false;
			numbers = [];
			response = 'Всего доброго, если хочешь поговорить пиши /start';
		} else if (/^\/name: [A-Za-z]+$/.test(command)) {
			const name = command.split(' ')[1];
			response = `Привет ${name}, приятно познакомиться. Я умею считать, введи числа которые надо посчитать`;
		} else if (
			!numbers.length &&
			/^\/number: [0-9]+,[0-9]+$/.test(command)
		) {
			numbers = command
				.split(' ')[1]
				.split(',')
				.map(item => parseInt(item));
			response = 'Выберите одно из действий: -, +, *, /';
		} else if (numbers.length && /^[/+\-*]$/.test(command)) {
			let result;
			if (command[0] === '/') result = numbers[0] / numbers[1];
			else if (command[0] === '*') result = numbers[0] * numbers[1];
			else if (command[0] === '-') result = numbers[0] - numbers[1];
			else if (command[0] === '+') result = numbers[0] + numbers[1];
			response = `Результат: ${result.toString()}`;
			numbers = [];
		}
		if (debug) console.log('after: ', isStart, numbers);
		return response;
	};
}
export default ChatBotApi;
