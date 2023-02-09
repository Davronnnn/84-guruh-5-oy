import { createContext, useState } from 'react';

const FavoritesContext = createContext({});

export const FavoritesContextProvider = ({ children }) => {
	const [favoriteList, setFavoriteList] = useState([]);

	return (
		<FavoritesContext.Provider
			value={{
				favoriteList,
				setFavoriteList,
			}}>
			{children}
		</FavoritesContext.Provider>
	);
};
export default FavoritesContext;
