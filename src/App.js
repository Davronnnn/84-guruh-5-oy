import React from 'react';

import Footer from './componets/Footer/Footer.jsx';
import Header from './componets/Header/Header.jsx';
import ProductList from './componets/ProductList/ProductList.jsx';

function App() {
	return (
		<div className=' p-5  '>
			<Header />
			<h1 className='bg-blue-500  text-center text-4xl'>Title App</h1>
			<ProductList />
			<Footer />
		</div>
	);
}

export default App;
