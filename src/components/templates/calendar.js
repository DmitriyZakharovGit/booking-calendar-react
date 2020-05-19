import React, { useState } from 'react';
import moment from 'moment';

import { Container as CommonContainer } from '../atoms/common';
import { Container as CalendarContainer } from '../atoms/calendar';
import { CalendarHeader } from '../organisms';

import Context from '../../contexts';
import { DateTimeHelper } from '../../helpers';

export default function CalendarForm() {
	const [week, setWeek] = useState(moment());
	const [timezone, setTimezone] = useState('');

	const HeaderValues = {
		onChange: setTimezone,
		setNextWeek: () => setWeek(DateTimeHelper.nextWeek(week)),
		setPrevWeek: () => setWeek(DateTimeHelper.prevWeek(week)),
		week,
	};

	return (
		<CalendarContainer>
			<CommonContainer>
				<Context.Provider value={HeaderValues}>
					<CalendarHeader />
				</Context.Provider>
			</CommonContainer>
		</CalendarContainer>
	);
}
