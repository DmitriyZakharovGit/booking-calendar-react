import React, { useContext } from 'react';

import { NextButton, PrevButton } from '../atoms/header';

import Context from '../../contexts';

export default () => {
	const {
		setNextWeek,
		setPrevWeek,
	} = useContext(Context);

	return (
		<>
			<PrevButton onClick={setPrevWeek} />
			<NextButton onClick={setNextWeek} />
		</>
	);
};
