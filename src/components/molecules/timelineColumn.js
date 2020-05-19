import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { Container } from '../atoms/common';
import { TitleLabel, Button } from '../atoms/content';

import { DateTimeHelper } from '../../helpers';
import { CalendarService } from '../../services';

export default function TimelineColumn({ date }) {
	const [times, setTimes] = useState([]);

	const DateFormat = DateTimeHelper.getDayWeek(date);

	useEffect(() => {
		CalendarService
			.GetList()
			.then((responseData) => {
				setTimes(responseData.data.items);
			});
	}, [date]);

	return (
		<Container flexDirection="column">
			<TitleLabel>{DateFormat}</TitleLabel>

			{times.map((item) => (
				<Button key={item.time} disabled={item.disabled}>
					{moment(item.time).format('hh:mm')}
				</Button>
			))}
		</Container>
	);
}
