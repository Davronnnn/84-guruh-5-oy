import { createContext, useState } from 'react';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
	const [products, setProducts] = useState([{}]);
	const [counter, setCounter] = useState(products.length);

	const increaseCounter = (id, data) => {
		console.log(id);
		const result = products.filter((product) => {
			if (product.id !== id) {
				setCounter((prev) => prev + 1);
				const result = product.push(data);
				setProducts(result);
				return product;
			}
		});
		console.log(result);

		setProducts(result);
	};
	return (
		<ShopContext.Provider
			value={{
				products,
				increaseCounter,
				counter,
			}}>
			{children}
		</ShopContext.Provider>
	);
};

export default ShopContextProvider;
