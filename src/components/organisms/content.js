import React, { useContext } from 'react';

import { ContentContainer } from '../atoms/content';
import { TimelineColumn } from '../molecules';

import Context from '../../contexts';

export default () => {
	const { date } = useContext(Context);

	const week = Array(7)
		.fill(null)
		.map((item, index) => date.clone().add(index, 'day'));

	return (
		<ContentContainer>
			{week.map((dateWeek) => (
				<TimelineColumn date={dateWeek} />
			))}
		</ContentContainer>
	);
};
