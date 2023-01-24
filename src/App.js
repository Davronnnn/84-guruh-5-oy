import React from 'react';
import Header from './components/Header';

function App() {
	const name = 'john';

	return (
		<div>
			<div className='App'>
				<Header></Header>
				<h2>{name}</h2>
				<img src='https://picsum.photos/200/300' alt='rasm' />
			</div>
		</div>
	);
}

export default App;
