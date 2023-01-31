import React, { useState, useEffect } from 'react';

import Counter from './componets/Counter.jsx';

import ProductCard from './componets/ProductCard.jsx';
function App() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				setProducts(json);
				setLoading(false);
			});

		fetch('https://fakestoreapi.com/products/categories')
			.then((res) => res.json())
			.then((json) => console.log(json));
	}, []);

	return (
		<div className=' p-5  '>
			<h1 className='bg-blue-500 '>Title App</h1>
			{loading ? <div>Loading..</div> : ''}
			<Counter />
			<div className='d-flex flex flex-wrap gap-3 p-10'>
				{products.map((product) => (
					<ProductCard key={product.id} data={product} />
				))}
			</div>
		</div>
	);
}

export default App;
