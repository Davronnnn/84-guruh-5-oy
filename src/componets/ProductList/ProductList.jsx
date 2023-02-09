import { motion, useScroll } from 'framer-motion';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { BASE_URL } from '../../utils/constantas';
import Categories from '../Categories';
import MotionProgress from '../MotionAnimation/MotionProgress';
import ProductCard from './ProductCard';
import Pagination from '../Pagination';

let PageSize = 3;

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	// pagination
	const [currentPage, setCurrentPage] = useState(1);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return products.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, products]);

	// pagination
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
				{/* {products.map((product) => (
					<ProductCard key={product.id} data={product} />
				))} */}
				{currentTableData.map((item) => {
					return <ProductCard key={item.id} data={item} />;
				})}
				<Pagination
					className='pagination-bar'
					currentPage={currentPage}
					totalCount={products.length}
					pageSize={PageSize}
					onPageChange={(page) => setCurrentPage(page)}
				/>
			</div>
		</div>
	);
};

export default ProductList;
