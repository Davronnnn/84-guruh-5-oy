import { useEffect, useState } from 'react';

function useCounter(initial) {
	const [counter, setCounter] = useState(initial);

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter((prev) => prev + 1);
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return [counter, setCounter];
}
export default useCounter;
