import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../componets/ProductList/ProductCard';
import FavoritesContext from '../context/FavoritesContext';

const Favorites = () => {
	// const { favoriteList } = useContext(FavoritesContext);

	const { products } = useSelector((state) => state.favorite);

	return (
		<div className='d-flex flex flex-wrap gap-3 p-10'>
			{products.length === 0 && <div>Mahsulotlar saqlanmagan</div>}
			{products.map((product) => (
				<ProductCard key={product.id} data={product} />
			))}
		</div>
	);
};

export default Favorites;
