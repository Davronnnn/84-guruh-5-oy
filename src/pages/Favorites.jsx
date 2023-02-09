import React, { useContext } from 'react';
import ProductCard from '../componets/ProductList/ProductCard';
import FavoritesContext from '../context/FavoritesContext';

const Favorites = () => {
	const { favoriteList } = useContext(FavoritesContext);

	return (
		<div className='d-flex flex flex-wrap gap-3 p-10'>
			{favoriteList.length === 0 && <div>Mahsulotlar saqlanmagan</div>}
			{favoriteList.map((product) => (
				<ProductCard key={product.id} data={product} />
			))}
		</div>
	);
};

export default Favorites;
