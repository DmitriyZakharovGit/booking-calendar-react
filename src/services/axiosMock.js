import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import moment from 'moment';

const mock = new MockAdapter(axios, {
	delayResponse: 300,
});

const getTimeline = () => {
	const time = moment({ hour: 9, minute: 30 });

	return new Array(19)
		.fill(null)
		.map(() => {
			time.add(30, 'minute');

			return {
				disabled: Math.random() > 0.6,
				isGroup: time.format().includes('11:30'),
				time: time.clone(),
			};
		});
};

mock.onGet('/application/timeline/getList')
	.reply(200, {
		items: getTimeline(),
	});
