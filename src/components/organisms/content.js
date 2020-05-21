import React, { useContext } from 'react';

import { ContentContainer } from 'components/atoms/content';
import { TimelineColumn } from 'components/molecules';

import Context from 'contexts';

export default React.memo(() => {
	const { date } = useContext(Context);

	const week = [...Array(7)]
		.map((item, index) => date.clone().add(index, 'day'));

	return (
		<ContentContainer>
			{week.map((dateWeek) => (
				<TimelineColumn date={dateWeek} />
			))}
		</ContentContainer>
	);
});
