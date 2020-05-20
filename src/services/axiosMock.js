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

mock.onGet('/application/timeline/getGroupInfo')
	.reply(200, {
		content: 'Join a group session! \nCourse: English Composition \nTopic: "How to write a great thesis statement"',
		occupiedPlaces: 3,
		totalPlaces: 6,
	});

mock.onGet('/application/timeline/getPrivateInfo')
	.reply(200, {
		content: 'Book a Private Tutoring Session',
		timestamp: 30,
	});
