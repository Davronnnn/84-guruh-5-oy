import { createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constantas';

const favoriteSlicer = createSlice({
	name: 'favorite',
	initialState: {
		products: [],
	},
	reducers: {
		initialValue(state, action) {
			state.products = action.payload;

			// return;
		},
		addToFavorite(state, action) {
			state.products.push(action.payload);
		},
		removeFavorite(state, action) {
			const newProducts = state.products.filter((product) => {
				if (product._id !== action.payload._id) {
					return product;
				}
			});

			state.products = newProducts;

			return state;
		},
	},
});

export const fetchTodos = () => {
	return async (dispatch) => {
		const response = await fetch(BASE_URL + '/products');
		const todos = await response.json();

		dispatch(initialValue(todos.data));
	};
};

export const { addToFavorite, removeFavorite, initialValue } =
	favoriteSlicer.actions;
export const favoriteReducer = favoriteSlicer.reducer;
