import { useState, useContext } from 'react';

import Context from '../contexts';

export default function useInputValue(...args) {
	const [value, setValue] = useState('');
	const { onChange } = useContext(Context);

	return {
		bind: Object.assign(...args, {
			defaultValue: value,
			onChange: (event) => {
				const { value: inputValue } = event.target;

				setValue(inputValue);
				onChange(inputValue, event);
			},
		}),
		clear: () => setValue(''),
		value: () => value,
	};
}
