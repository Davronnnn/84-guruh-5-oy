// import ProductList from '../componets/ProductList/ProductList';

import { lazy } from 'react';

const ProductList = lazy(() => import('../componets/ProductList/ProductList'));

const Home = () => {
	return <ProductList />;
};

export default Home;
