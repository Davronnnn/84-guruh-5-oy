import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../utils/constantas';

const Categories = ({ setProducts }) => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetch(BASE_URL + 'products/categories')
			.then((res) => res.json())
			.then((json) => {
				setCategories(json);
			});
	}, []);

	const categoryHandler = (category) => {
		setLoading(true);
		fetch(
			category === 'all'
				? BASE_URL + 'products/'
				: BASE_URL + 'products/category/' + category
		)
			.then((res) => res.json())
			.then((json) => {
				setProducts(json);
				setLoading(false);
			});
	};
	if (loading) {
		return <div style={{ minHeight: '80vh' }}>Loading</div>;
	}
	return (
		<ul className='flex justify-evenly p-3'>
			<li onClick={() => categoryHandler('all')}>Barchasi</li>

			{categories.map((category, i) => (
				<li
					onClick={() => categoryHandler(category)}
					className='bg-gray-400 px-3 py-1 shadow text-yellow-500'
					key={i}>
					{category}
				</li>
			))}
		</ul>
	);
};

export default Categories;
