// import { favoriteReducer } from './reducers/favoriteReducer';
import { configureStore } from '@reduxjs/toolkit';
import { favoriteReducer } from './slicers/favoriteSlicer';

export const store = configureStore({
	reducer: {
		favorite: favoriteReducer,
		// counter: counterSlicer.reducer,
	},
	devTools: true,
});
