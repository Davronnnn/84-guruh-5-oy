export const fetchReducer = (state, action) => {
	switch (action.type) {
		case 'pending':
			return {
				...state,
				loading: true,
			};
		case 'success':
			return {
				// update state
				posts: action.payload,
				loading: false,
			};
		case 'failed':
			return {
				...state,
				loading: false,
			};

		default:
			return state;
	}
};
