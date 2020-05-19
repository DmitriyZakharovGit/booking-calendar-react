import React, { useContext } from 'react';

import { TitleLabel, Select } from '../atoms/header';
import Container from '../atoms/common/Container';

import { NavigationButton } from '../molecules';

import Context from '../../contexts';
import { useInputValue } from '../../hooks';
import { DateTimeHelper } from '../../helpers';

export default function CalendarHeader() {
	const { week } = useContext(Context);
	const select = useInputValue();

	return (
		<Container flex={1} justifyContent="space-between">
			<Container>
				<Container margin="0 24px 0 0">
					<NavigationButton />
				</Container>

				<TitleLabel>{DateTimeHelper.getMountYear(week)}</TitleLabel>
			</Container>

			<Select {...select.bind}>
				<option>
					Pacific Time – US and Canada ({DateTimeHelper.getPacificTime()})
				</option>

				<option>
					Greenwich Mean Time - Other ({DateTimeHelper.getGMT()})
				</option>
			</Select>
		</Container>
	);
}
