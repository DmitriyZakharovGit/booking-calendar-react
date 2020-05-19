import React from 'react';

import { Container } from '../atoms/common';
import { TitleLabel, Button } from '../atoms/content';

import { DateTimeHelper } from '../../helpers';

export default function TimelineColumn({ date }) {
	const DateFormat = DateTimeHelper.getDayWeek(date);

	return (
		<>
			<TitleLabel>{DateFormat}</TitleLabel>
			<Button>123</Button>
		</>
	);
}
