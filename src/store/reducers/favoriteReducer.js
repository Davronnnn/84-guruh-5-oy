import { initialState } from '..';

export function favoriteReducer(state = initialState, action) {
	switch (action.type) {
		case 'addToFavorite':
			const result = state.products;
			result.push(action.payload);

			return {
				...state,
				products: result,
				count: result.length,
			};
		case 'removeFavorite':
			const newProducts = state.products.filter((product) => {
				if (product._id !== action.payload._id) {
					return product;
				}
			});

			return {
				...state,
				products: newProducts,
				count: newProducts.length,
			};

		default:
			return state;
	}
}
