import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductCard from '../componets/ProductList/ProductCard';
import { BASE_URL } from '../utils/constantas';

const SinglePage = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		axios.get(BASE_URL + 'products/' + productId).then((res) => {
			setProduct(res.data);
			setLoading(false);
		});
	}, [productId]);

	const goBack = () => {
		navigate(-1);
	};
	return (
		<div className='antialiased'>
			<div className='py-6'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center space-x-2 text-gray-400 text-sm'>
						<Link
							to='/'
							className='hover:underline hover:text-gray-600'>
							Home
						</Link>
						<button onClick={goBack} className=''>
							ortga qaytish
						</button>
					</div>
				</div>

				{loading ? (
					<div>Loading...</div>
				) : (
					<ProductCard data={product} />
				)}
			</div>
		</div>
	);
};

export default SinglePage;
