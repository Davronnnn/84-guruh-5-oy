import { createContext, useState } from 'react';
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({
		token: localStorage.getItem('token')
			? localStorage.getItem('token')
			: '',
		isLogin: localStorage.getItem('token') ? true : false,
	});

	const logOut = () => {
		setUser({
			token: '',
			isLogin: false,
		});
		localStorage.removeItem('token');
	};

	return (
		<AuthContext.Provider value={{ user, setUser, logOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
