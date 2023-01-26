import React, { useState, useEffect } from 'react';
import './main.scss';
import Header from './components/Header';
import Todos from './components/Todos/Todos';

function App() {
	const [lang, setLang] = useState(
		localStorage.getItem('lang') ? localStorage.getItem('lang') : 'uz'
	);
	const [counter, setCounter] = useState(1);

	const [posts, setPosts] = useState({});

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPosts(data);
			});
	}, [counter]);

	const changeLanguageHandler = (e) => {
		setLang(e.target.value);
		localStorage.setItem('lang', e.target.value);
	};

	return (
		<div className='App container my-5'>
			<p>{counter}</p>
			<Header lang={lang} changeLanguage={changeLanguageHandler} />
			<Todos />

			<input
				type='text'
				value={counter}
				onChange={(e) => {
					setCounter(e.target.value);
				}}
				name=''
				id=''
			/>
			<h2>{posts.name}</h2>
			<p>{posts.username}</p>
		</div>
	);
}

export default App;
