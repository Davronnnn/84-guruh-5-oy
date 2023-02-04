import { motion } from 'framer-motion';
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import MotionOpacity from '../MotionAnimation/MotionOpacity';
const ProductCard = ({ data }) => {
	const { increaseCounter } = useContext(ShopContext);

		

	useEffect(() => {}, []);

	return (
		<MotionOpacity>
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
						{data?.category}
					</span>
					<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
						{data?.price}
					</span>
					<p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
						{data?.rating?.rate}
						<span>{data?.rating?.count}</span>
					</p>
				</div>
			</div>
		</MotionOpacity>
	);
};

export default ProductCard;
