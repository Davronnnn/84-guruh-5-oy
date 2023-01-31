import React, { useReducer } from 'react';

import { INCREASE, DECREASE } from '../utils/constantas';
import { counterReducer } from '../reducers/counterReducer';
const Counter = () => {
	const [counter, counterDispatch] = useReducer(counterReducer, {
		counter: 0,
	});
	const increaseHandler = () => {
		counterDispatch({
			type: INCREASE,
		});
	};
	const decreaseHandler = () => {
		counterDispatch({
			type: DECREASE,
		});
	};
	return (
		<div>
			<button onClick={increaseHandler} className='btn bg-blue-500 mt-3'>
				Increase
			</button>

			<p className='text-6xl p-3'>{counter.counter}</p>

			<button onClick={decreaseHandler} className='btn bg-blue-500 mt-3'>
				Decrease
			</button>
		</div>
	);
};

export default Counter;
