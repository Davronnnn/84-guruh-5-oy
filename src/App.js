import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './componets/Footer/Footer.jsx';
import Header from './componets/Header/Header.jsx';
import { FavoritesContextProvider } from './context/FavoritesContext.jsx';
import { LanguageContextProvider } from './context/LanguageContext.jsx';
import ShopContextProvider from './context/ShopContext.jsx';
import About from './pages/About.jsx';
import Favorites from './pages/Favorites.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import SinglePage from './pages/SinglePage.jsx';
import UserPage from './pages/UserPage.jsx';

function App() {
	return (
		<LanguageContextProvider>
			<ShopContextProvider>
				<FavoritesContextProvider>
					<Header />
					<Routes>
						<Route index element={<Home />} />
						<Route
							caseSensitive={true}
							path='/about'
							element={<About />}>
							<Route path='/about/user' element={<UserPage />} />
						</Route>

						<Route
							path='/product/:productId'
							element={<SinglePage />}
						/>
						<Route path='/favorites' element={<Favorites />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
					<Footer />
				</FavoritesContextProvider>
			</ShopContextProvider>
		</LanguageContextProvider>
	);
}

export default App;
