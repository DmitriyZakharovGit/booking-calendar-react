import React, { useState } from 'react';

import CalendarForm from '../templates';

import Context from '../../contexts';

export default function CalendarPage() {
	const [week, setWeek] = useState();

	return (
		<Context.Provider value={{}}>
			<CalendarForm />
		</Context.Provider>
	);
}
