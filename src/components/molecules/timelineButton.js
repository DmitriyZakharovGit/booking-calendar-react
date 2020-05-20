import React, { useContext, useRef, useState } from 'react';
import moment from 'moment';

import { Button } from '../atoms/content';

import TooltipWrapper from './tooltip';

import { useItemPosition } from '../../hooks';
import Context from '../../contexts';

export default function TimelineButton({ time, disabled, isGroup }) {
	const [tooltipVisible, setTooltipVisible] = useState(false);
	const { timezone } = useContext(Context);

	const buttonRef = useRef(null);

	const tooltipValues = {
		isGroup,
		styles: useItemPosition(buttonRef),
		time,
	};

	return (
		<>
			<Button
				key={time}
				ref={buttonRef}
				disabled={disabled}
				icon={isGroup}
				onMouseEnter={() => setTooltipVisible(true)}
				onMouseLeave={() => setTooltipVisible(false)}
			>
				<label className="icon" />

				{moment(time).format(timezone)}
			</Button>

			{tooltipVisible && (
				<Context.Provider value={tooltipValues}>
					<TooltipWrapper />
				</Context.Provider>
			)}
		</>
	);
}