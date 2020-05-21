import React, { useState, useCallback } from 'react';
import moment from 'moment';

import { Container as CommonContainer } from 'components/atoms/common';
import { Container as CalendarContainer } from 'components/atoms/calendar';
import { CalendarHeader, CalendarContent } from 'components/organisms';

import Context from 'contexts';
import { DateTimeHelper } from 'helpers';

export default () => {
	const [date, setDate] = useState(moment());
	const [timezone, setTimezone] = useState('hh:mm A');

	const setNextWeek = useCallback(() => {
		setDate(DateTimeHelper.nextWeek(date));
	}, [date]);

	const setPrevWeek = useCallback(() => {
		setDate(DateTimeHelper.prevWeek(date));
	}, [date]);

	const HeaderValues = {
		date,
		onChange: setTimezone,
		setNextWeek,
		setPrevWeek,
	};

	const ContentValues = {
		date,
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
};
