import React, { useState, useEffect, useReducer } from 'react';
import styles from './app.module.scss';
import Post from './componets/Post';

const initialState = {
	posts: [],
	loading: false,
};

const reducer = (state, action) => {
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

function App() {
	const [data, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({ type: 'pending' });

		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((data) => {
				if (Object.keys(data).length > 0) {
					dispatch({ type: 'success', payload: data });
				} else {
					dispatch({ type: 'failed' });
				}
			})
			.catch((err) => {
				dispatch({ type: 'failed' });
			});
	}, []);

	return (
		<div className='App container my-5'>
			<h1 className={`${styles.title}`}>Title App</h1>

			{data.loading ? (
				<div>Loading...</div>
			) : (
				data?.posts?.map((post, key) => <Post key={key} data={post} />)
			)}
		</div>
	);
}

export default App;

// useEffect(() => {
// 	fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			console.log(data);
// 			setPosts(data);
// 		});
// }, [counter]);

// const changeLanguageHandler = (e) => {
// 	setLang(e.target.value);
// 	localStorage.setItem('lang', e.target.value);
// };
