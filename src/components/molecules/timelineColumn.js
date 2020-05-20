import React, { useEffect, useState, useContext } from 'react';
import moment from 'moment';

import { Container } from '../atoms/common';
import { TitleLabel, Button } from '../atoms/content';

import Context from '../../contexts';
import { DateTimeHelper } from '../../helpers';
import { CalendarService } from '../../services';

export default function TimelineColumn({ date }) {
	const { timezone } = useContext(Context);
	const [times, setTimes] = useState([]);

	const DateFormat = DateTimeHelper.getDayWeek(date.format());

	useEffect(() => {
		CalendarService
			.GetList()
			.then((responseData) => {
				setTimes(responseData.data.items);
			});
	}, [date]);

	return (
		<Container alignItems="center" flexDirection="column">
			<TitleLabel>{DateFormat}</TitleLabel>

			<>
				{times.map(({ time, disabled, isGroup }) => (
					<Button key={time} disabled={disabled} icon={isGroup}>
						<div className="icon" />

						{moment(time).format(timezone)}
					</Button>
				))}
			</>
		</Container>
	);
}
