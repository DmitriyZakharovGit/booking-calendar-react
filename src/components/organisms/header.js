import React, { useContext } from 'react';

import { NavigationButton } from '../molecules';

import Context from '../../contexts';

export default function CalendarHeader() {
	const { onChangeTimezone } = useContext(Context);

	return (
		<>
			<NavigationButton />
		</>
	);
}
