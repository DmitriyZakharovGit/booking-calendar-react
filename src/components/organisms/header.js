import React, { useContext } from 'react';

import { Container } from '../atoms/common';
import { NavigationButton } from '../molecules';

import Context from '../../contexts';

export default function CalendarHeader() {
	const { onChangeTimezone } = useContext(Context);

	return (
		<>
			<Container margin="0 24px 0 0">
				<NavigationButton />
			</Container>
		</>
	);
}
