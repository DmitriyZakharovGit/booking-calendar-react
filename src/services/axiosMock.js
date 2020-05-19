import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, {
	delayResponse: 900,
});

mock.onGet('/application/time/getInfo')
	.reply(200, {
		course: 'English Composition',
		occupiedPlaces: Math.random() * Math.floor(7),
		topic: '"How to write a great thesis statement"',
	});
