import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import App from './components/App';
import './services/axiosMock';

WebFont.load({
	google: {
		families: ['Open Sans:400,500,600,700,800'],
	},
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,

	document.getElementById('root'),
);
