import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../context/FavoritesContext';
import { ShopContext } from '../../context/ShopContext';
import MotionOpacity from '../MotionAnimation/MotionOpacity';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
const ProductCard = ({ data }) => {
	const { increaseCounter } = useContext(ShopContext);
	const { favoriteList, setFavoriteList } = useContext(FavoritesContext);

	const { products } = useSelector((state) => state);
	const dispatch = useDispatch();

	const addToFavorites = (data) => {
		if (products.length > 0) {
			products.forEach((product) => {
				console.log(product, data);
				if (product._id == data._id) {
					dispatch({ type: 'removeFavorite', payload: data });
				} else {
					dispatch({ type: 'addToFavorite', payload: data });
				}
			});
		} else {
			dispatch({ type: 'addToFavorite', payload: data });
		}

		// 	console.log(data);

		// let has = false;
		// favoriteList.forEach((product) => {
		// 	if (product.id === data.id) {
		// 		has = true;
		// 	}
		// });

		// if (!has) {
		// 	setFavoriteList([...favoriteList, data]);
		// 	toast.success("Mahsulot qo'shildi!");
		// } else {
		// 	toast.warning('Mahsulot olib tashlandi!');
		// 	const result = favoriteList.filter((product) => {
		// 		if (product.id !== data.id) {
		// 			return product;
		// 		}
		// 	});
		// 	setFavoriteList(result);
		// }
	};
	return (
		<MotionOpacity>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				draggable
				theme='light'
			/>
			{/* Same as */}
			<div>
				<Link to={'/product/' + data?.id}>
					<img
						onClick={() => increaseCounter(data?.id, data)}
						className='w-full'
						src={data?.image}
						alt='Sunset in the mountains'
					/>
				</Link>
				<div className='px-6 py-4'>
					<div className='font-bold text-xl mb-2'>{data?.title}</div>
					<p className='text-gray-700 text-base'>
						{data?.description}
					</p>
				</div>
				<div className='px-6 pt-4 pb-2'>
					<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
						{data?.category.name}
					</span>
					<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
						{data?.price}
					</span>
					<p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
						{data?.rating?.rate}
						<span>{data?.rating?.count}</span>
					</p>

					<button
						onClick={() => addToFavorites(data)}
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
						Add to favorite
					</button>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
						Add to backet
					</button>
				</div>
			</div>
		</MotionOpacity>
	);
};

export default ProductCard;
