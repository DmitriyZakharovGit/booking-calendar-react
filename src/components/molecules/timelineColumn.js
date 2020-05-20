import React, { useEffect, useState } from 'react';

import { Container } from '../atoms/common';
import { TitleLabel } from '../atoms/content';

import TimelineButton from './timelineButton';

import { DateTimeHelper } from '../../helpers';
import { CalendarService } from '../../services';

export default function TimelineColumn({ date }) {
	const [times, setTimes] = useState([]);

	const DateFormat = DateTimeHelper.getDayWeek(date.format());

	useEffect(() => {
		CalendarService
			.getList(date.format())
			.then((responseData) => {
				setTimes(responseData.data.items);
			});
	}, [date]);

	return (
		<Container alignItems="center" flexDirection="column" position="relative">
			<TitleLabel>{DateFormat}</TitleLabel>

			{times.map((item) => (
				<TimelineButton {...item} key={item.time} />
			))}
		</Container>
	);
}
