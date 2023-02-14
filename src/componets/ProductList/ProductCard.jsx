import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../context/FavoritesContext';
import { ShopContext } from '../../context/ShopContext';
import MotionOpacity from '../MotionAnimation/MotionOpacity';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	addToFavorite,
	removeFavorite,
} from '../../store/slicers/favoriteSlicer';
const ProductCard = ({ data }) => {
	const { increaseCounter } = useContext(ShopContext);
	// const { favoriteList, setFavoriteList } = useContext(FavoritesContext);

	const dispatch = useDispatch();

	const { products } = useSelector((state) => state.favorite);

	const addToFavorites = (data) => {
		const isExist = products.find((product) => product._id === data._id);
		if (isExist) {
			dispatch(removeFavorite(data));
		} else {
			dispatch(addToFavorite(data));
		}
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
