import React, { useContext } from 'react';

import { HeaderContainer, TitleLabel, Select } from '../atoms/header';
import { Container } from '../atoms/common';

import { NavigationButton } from '../molecules';

import Context from '../../contexts';
import { useInputValue } from '../../hooks';
import { DateTimeHelper } from '../../helpers';

export default function CalendarHeader() {
	const { date } = useContext(Context);
	const select = useInputValue();

	return (
		<HeaderContainer>
			<Container>
				<Container margin="0 24px 0 0">
					<NavigationButton />
				</Container>

				<TitleLabel>{DateTimeHelper.getMonthYear(date)}</TitleLabel>
			</Container>

			<Select {...select.bind}>
				<option>
					Pacific Time – US and Canada ({DateTimeHelper.getPacificTime()})
				</option>

				<option>
					Greenwich Mean Time - Other ({DateTimeHelper.getGMT()})
				</option>
			</Select>
		</HeaderContainer>
	);
}
