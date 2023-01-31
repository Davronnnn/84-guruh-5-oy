import React from 'react';

const ProductCard = ({ data }) => {
	return (
		<div className='w-1/4 rounded overflow-hidden shadow-lg'>
			<img
				className='w-full'
				src={data.image}
				alt='Sunset in the mountains'
			/>
			<div className='px-6 py-4'>
				<div className='font-bold text-xl mb-2'>{data.title}</div>
				<p className='text-gray-700 text-base'>{data.description}</p>
			</div>
			<div className='px-6 pt-4 pb-2'>
				<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
					{data.category}
				</span>
				<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
					{data.price}
				</span>
				<p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
					{data.rating.rate}
					<span>{data.rating.count}</span>
				</p>
			</div>
		</div>
	);
};

export default ProductCard;
