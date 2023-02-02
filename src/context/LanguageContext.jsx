import { createContext, useState } from 'react';

export const LanguageContext = createContext({});

export const LanguageContextProvider = ({ children }) => {
	const [lang, setLang] = useState('uz');
	return (
		<LanguageContext.Provider
			value={{
				lang: lang,
				setLang: setLang,
			}}>
			{children}
		</LanguageContext.Provider>
	);
};
