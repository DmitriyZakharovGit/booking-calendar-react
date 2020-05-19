import React, { useState } from 'react';
import moment from 'moment';

import { Container as CommonContainer } from '../atoms/common';
import { Container as CalendarContainer } from '../atoms/calendar';
import { CalendarHeader, CalendarContent } from '../organisms';

import Context from '../../contexts';
import { DateTimeHelper } from '../../helpers';

export default function CalendarForm() {
	const [date, setDate] = useState(moment());
	const [timezone, setTimezone] = useState(null);

	const HeaderValues = {
		date,
		onChange: setTimezone,
		setNextWeek: () => setDate(DateTimeHelper.nextWeek(date)),
		setPrevWeek: () => setDate(DateTimeHelper.prevWeek(date)),
	};

	const ContentValues = {
		timezone,
	};

	return (
		<CalendarContainer>
			<CommonContainer flexDirection="column">
				<Context.Provider value={HeaderValues}>
					<CalendarHeader />
				</Context.Provider>

				<Context.Provider value={ContentValues}>
					<CalendarContent />
				</Context.Provider>
			</CommonContainer>
		</CalendarContainer>
	);
}
