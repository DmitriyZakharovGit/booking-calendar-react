import React, { useContext } from 'react';

import { TitleLabel, Select } from '../atoms/header';
import Container from '../atoms/common/Container';

import { NavigationButton } from '../molecules';

import Context from '../../contexts';
import { useInputValue } from '../../hooks';

export default function CalendarHeader() {
	const { currentDate } = useContext(Context);
	const select = useInputValue();

	return (
		<Container flex={1} justifyContent="space-between">
			<Container>
				<Container margin="0 24px 0 0">
					<NavigationButton />
				</Container>

				<TitleLabel>{currentDate}</TitleLabel>
			</Container>

			<Select {...select.bind}>
				<option>Pacific Time – US and Canada (7:00 AM)</option>
			</Select>
		</Container>
	);
}
