import React, {
	useContext, useRef, useState, useCallback,
} from 'react';
import moment from 'moment';

import { Button } from 'components/atoms/content';


import Context from 'contexts';
import { useItemPosition } from 'hooks';
import TooltipWrapper from './tooltip';

export default React.memo(({ time, disabled, isGroup }) => {
	const [tooltipVisible, setTooltipVisible] = useState(false);
	const { timezone } = useContext(Context);

	const buttonRef = useRef(null);

	const setVisible = useCallback(() => {
		setTooltipVisible(true);
	}, [tooltipVisible]);

	const setInvisible = useCallback(() => {
		setTooltipVisible(false);
	}, [tooltipVisible]);

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
				onMouseEnter={setVisible}
				onMouseLeave={setInvisible}
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
});
