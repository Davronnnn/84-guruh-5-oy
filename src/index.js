import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { LanguageContextProvider } from './context/LanguageContext';
import ShopContextProvider from './context/ShopContext';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<LanguageContextProvider>
		<ShopContextProvider>
			<App />
		</ShopContextProvider>
	</LanguageContextProvider>
	// </React.StrictMode>
);
