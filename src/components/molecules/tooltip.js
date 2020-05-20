import React, { useState, useContext, useEffect } from 'react';

import { Tooltip } from 'components/atoms/content';

import Context from 'contexts';

export default () => {
	const [tooltipInfo, setTooltipInfo] = useState(null);
	const { isGroup, styles } = useContext(Context);

	useEffect(() => {
		const groupInfo = {
			content: 'Join a group session! \nCourse: English Composition \nTopic: "How to write a great thesis statement"',
			occupiedPlaces: 3,
			totalPlaces: 6,
		};

		const privateInfo = {
			content: 'Book a Private Tutoring Session',
			timestamp: 30,
		};

		setTooltipInfo(isGroup ? groupInfo : privateInfo);
	}, [isGroup]);

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
};
