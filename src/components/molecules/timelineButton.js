import React, { useContext } from 'react';
import moment from 'moment';

import { Button } from '../atoms/content';

import Context from '../../contexts';

export default function TimelineButton({ time, disabled, isGroup }) {
	const { timezone } = useContext(Context);

	return (
		<Button key={time} disabled={disabled} icon={isGroup}>
			<div className="icon" />

			{moment(time).format(timezone)}
		</Button>
	);
}
