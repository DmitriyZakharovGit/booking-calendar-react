import React, { useState, useContext, useEffect } from 'react';

import { Tooltip } from '../atoms/content';

import Context from '../../contexts';
import { CalendarService } from '../../services';

export default function TooltipWrapper() {
	const [tooltipInfo, setTooltipInfo] = useState(null);
	const { time, isGroup, styles } = useContext(Context);

	useEffect(() => {
		const method = isGroup
			? CalendarService.getGroupInfo : CalendarService.getPrivateInfo;

		method(time)
			.then((responseData) => {
				setTooltipInfo(responseData.data);
			})
			.catch(() => {});

		return () => CalendarService.axiosSource.cancel('Axios request canceled.');
	}, []);

	return (
		<>
			{tooltipInfo && (
				<Tooltip {...styles} isGroup={isGroup}>
					<div className="content">
						{tooltipInfo.content}
					</div>

					{tooltipInfo.timestamp && (
						<div className="subtext">
							{tooltipInfo.timestamp} min
						</div>
					)}

					{tooltipInfo.occupiedPlaces && (
						<div className="subtext">
							<div className="icon" />
							{tooltipInfo.occupiedPlaces} / {tooltipInfo.totalPlaces} people
						</div>
					)}
				</Tooltip>
			)}
		</>
	);
}
