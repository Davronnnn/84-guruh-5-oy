import { LoadingButton } from '@mui/lab';
import { Button, Typography } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ProductList from '../componets/ProductList/ProductList';
import Test from '../componets/Test';
import useCounter from '../hooks/useCounter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const theme = createTheme({
	palette: {
		primary: blue,
		nimadir: 'red',
	},
});
const Home = () => {
	const [value, setValue] = useState(10);

	const updateCounter = () => {
		return 12;
	};
	const [counter, setCounter] = useCounter(updateCounter);

	const render = useCallback(() => {
		console.log('render function', counter);
	}, []);

	return (
		<>
			{counter}
			<button
				onClick={() => {
					setCounter(0);
				}}
				className='bg-slate-600 ml-5 p-1 text-white'>
				reset
			</button>

			<button onClick={render}>render function</button>
			<input
				className='bg-gray-800 text-white'
				onChange={(e) => setValue(e.target.value)}
				type='number'
				value={value}
			/>
			<Test />
			<button className='bg-slate-600 ml-5 p-1 text-white'>Add </button>
			<ProductList />
		</>
	);
};

export default Home;
