import { DECREASE, INCREASE } from '../utils/constantas';

export const counterReducer = (state, action) => {
	if (action.type === INCREASE) {
		return { counter: state.counter + 1 };
	} else if (action.type === DECREASE) {
		return { counter: state.counter - 1 };
	} else {
		return state;
	}
};
