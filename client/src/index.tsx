import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import store from './redux/Store';


ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
