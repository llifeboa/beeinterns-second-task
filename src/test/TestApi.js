const test = require('ava');
const ChatApi = require('../api/ChatBotApi.js');

const ChatApiObject = ChatApi['default']();

test('/start', t => {
	t.is(
		ChatApiObject('/start'),
		'Привет, меня зовут Чат-бот, а как зовут тебя?'
	);
});

test('/start double', t => {
	t.is(ChatApiObject('/start'), 'Я не понимаю, введите другую команду!');
});

test('/name: Alex', t => {
	t.is(
		ChatApiObject('/name: Alex'),
		'Привет Alex, приятно познакомиться. Я умею считать, введи числа которые надо посчитать'
	);
});

test('/number: 7,9', t => {
	t.is(
		ChatApiObject('/number: 7,9'),
		'Выберите одно из действий: -, +, *, /'
	);
});

test('*', t => {
	t.is(ChatApiObject('*'), 'Результат: ' + (7 * 9).toString());
});

test('/number: 7,0', t => {
	t.is(
		ChatApiObject('/number: 7,0'),
		'Выберите одно из действий: -, +, *, /'
	);
});

test('/', t => {
	t.is(ChatApiObject('/'), 'Результат: ' + (7 / 0).toString());
});

test('/number: 7,100000', t => {
	t.is(
		ChatApiObject('/number: 7,100000'),
		'Выберите одно из действий: -, +, *, /'
	);
});

test('+', t => {
	t.is(ChatApiObject('+'), 'Результат: ' + (7 + 100000).toString());
});

test('/stop', t => {
	t.is(
		ChatApiObject('/stop'),
		'Всего доброго, если хочешь поговорить пиши /start'
	);
});

test('-', t => {
	t.is(ChatApiObject('-'), 'Я не понимаю, введите другую команду!');
});
