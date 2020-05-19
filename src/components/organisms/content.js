import React, { useContext, useEffect } from 'react';

import { ContentContainer } from '../atoms/content';
import { TimelineColumn } from '../molecules';

import Context from '../../contexts';

export default function CalendarHeader() {
	const { date } = useContext(Context);

	useEffect(() => {
		// request to server
	}, []);

	return (
		<ContentContainer>
			<TimelineColumn date={date} />
		</ContentContainer>
	);
}
