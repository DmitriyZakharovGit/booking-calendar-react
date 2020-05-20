import React, { useContext } from 'react';

import { HeaderContainer, TitleLabel, Select } from 'components/atoms/header';
import { Container } from 'components/atoms/common';

import { NavigationButton } from 'components/molecules';

import Context from 'contexts';
import { useInputValue } from 'hooks';
import { DateTimeHelper } from 'helpers';

export default () => {
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
				<option value="hh:mm A">
					Pacific Time – US and Canada ({DateTimeHelper.getPacificTime()})
				</option>

				<option value="HH:mm">
					Greenwich Mean Time - Other ({DateTimeHelper.getGMT()})
				</option>
			</Select>
		</HeaderContainer>
	);
};
