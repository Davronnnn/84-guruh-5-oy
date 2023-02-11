import { createStore } from 'redux';
import { favoriteReducer } from './reducers/favoriteReducer';

export const initialState = {
	products: [],
	count: 0,
	login: true,
};

export const store = createStore(favoriteReducer);
