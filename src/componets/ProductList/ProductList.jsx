import { motion, useScroll } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { BASE_URL } from '../../utils/constantas';
import Categories from '../Categories';
import MotionProgress from '../MotionAnimation/MotionProgress';
import ProductCard from './ProductCard';

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	const { lang } = useContext(LanguageContext);

	useEffect(() => {
		setLoading(true);
		fetch(BASE_URL + 'products')
			.then((res) => res.json())
			.then((json) => {
				setProducts(json);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div style={{ minHeight: '80vh' }}>Loading</div>;
	}

	return (
		<div>
			<MotionProgress />
			<h4 className='text-3xl text-center'>
				{lang === 'uz'
					? 'Mahsulotlar'
					: lang === 'ru'
					? 'Продукти'
					: 'Products'}
			</h4>

			<Categories setProducts={setProducts} />
			<div className='d-flex flex flex-wrap gap-3 p-10'>
				{products.map((product) => (
					<ProductCard key={product.id} data={product} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
