import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import moment from 'moment';

const mock = new MockAdapter(axios, {
	delayResponse: 900,
});

const time = moment({ hour: 9, minute: 30 });

mock.onGet('/application/timeline/getList')
	.reply(200, {
		items: new Array(19)
			.fill(null)
			.map(() => {
				time.add(30, 'minute');

				return {
					disabled: Math.random() > 0.6,
					time: time.clone(),
				};
			}),
	});

mock.onGet('/application/timeline/getInfo')
	.reply(200, {
		course: 'English Composition',
		occupiedPlaces: Math.random() * Math.floor(7),
		topic: '"How to write a great thesis statement"',
	});
