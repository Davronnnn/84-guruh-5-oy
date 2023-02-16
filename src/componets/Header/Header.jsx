import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Language } from '../../assets/language';
import { LanguageContext } from '../../context/LanguageContext';

import shopIcon from '../../assets/images/shopping-cart.png';
import likeIcon from '../../assets/images/likeIcon.png';
import { AuthContext } from '../../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../store/slicers/favoriteSlicer';

export default function Header() {
	// context
	// const [navbarOpen, setNavbarOpen] = useState(false);
	// const { favoriteList } = useContext(FavoritesContext);

	const dispatch = useDispatch();

	const [navbarOpen, setNavbarOpen] = useState(false);
	const { user, logOut } = useContext(AuthContext);

	const { products } = useSelector((state) => state.favorite);

	const { lang, setLang } = useContext(LanguageContext);

	const changeLanguage = (e) => {
		setLang(e.target.value);
	};

	useEffect(() => {
		dispatch(fetchTodos());
	}, []);

	const { pathname } = useLocation();

	return (
		<header>
			<nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
				<div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
					<a
						href='https://flowbite.com'
						className='flex items-center'>
						<img
							src='https://flowbite.com/docs/images/logo.svg'
							className='mr-3 h-6 sm:h-9'
							alt='Flowbite Logo'
						/>
						<span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
							Flowbite
						</span>
						<span className=' ml-10 self-center text-xl font-semibold whitespace-nowrap dark:text-white'></span>
					</a>
					<ul className='flex'>
						<li className='mr-6'>
							<NavLink
								className={`text-blue-500 hover:text-blue-800`}
								style={({ isActive }) => ({
									textDecoration: isActive
										? 'underline'
										: 'none',
									color: isActive ? 'red' : '',
								})}
								to='/'>
								Home
							</NavLink>
						</li>
						<li className='mr-6'>
							<NavLink
								style={({ isActive }) => ({
									textDecoration: isActive
										? 'underline'
										: 'none',
									color: isActive ? 'red' : '',
								})}
								className={`text-blue-500 hover:text-blue-800 ${
									pathname === '/about' && 'underline'
								}`}
								to='/about'>
								About
							</NavLink>
						</li>

						<li className='ml-3 relative'>
							<img width={40} height={40} src={shopIcon} alt='' />
							<span className='text-white absolute  left-full bottom-3 bg-blue-600 py-1 px-2 rounded-full'>
								0
							</span>
						</li>
						<button
							className='relative'
							onClick={() => setNavbarOpen((prev) => !prev)}>
							<li className='ml-9  '>
								<img
									width={40}
									height={40}
									src={likeIcon}
									alt=''
								/>
								<span className='text-white absolute  left-full bottom-3 bg-blue-600 py-1 px-2 rounded-full'>
									{products.length}
								</span>
							</li>
							{navbarOpen && (
								<ul className='absolute top-full z-10 bg-black py-2 px-8'>
									{products.slice(0, 2).map((item, i) => (
										<li className='text-white' key={i}>
											{item.title}
										</li>
									))}

									<Link
										className='text-blue-800'
										to={'/favorites'}>
										Barcha maxsulotlarni ko'rish
									</Link>
								</ul>
							)}
						</button>
					</ul>

					<div className='flex items-center lg:order-2'>
						<select
							style={{
								border: '1px solid #d1d5db',
							}}
							className='px-3 bg-transparent text-white border-slate-300 border-spacing-1'
							name='language'
							onChange={changeLanguage}
							id=''>
							<option value='uz'>Uz</option>
							<option value='en'>En</option>
							<option value='ru'>Ru</option>
						</select>
						{user?.isLogin ? (
							<button onClick={logOut}>Log out</button>
						) : (
							<Link
								to='/login'
								className='text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'>
								Log in
							</Link>
						)}
						<a
							href='/'
							className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>
							{Language[lang].header.getStarted}
						</a>
						<button
							data-collapse-toggle='mobile-menu-2'
							type='button'
							className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
							aria-controls='mobile-menu-2'
							aria-expanded='false'>
							<span className='sr-only'>Open main menu</span>
							<svg
								className='w-6 h-6'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
									clipRule='evenodd'></path>
							</svg>
							<svg
								className='hidden w-6 h-6'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
									clipRule='evenodd'></path>
							</svg>
						</button>
					</div>
					<div
						className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'
						id='mobile-menu-2'>
						<ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
							<li>
								<a
									href='/'
									className='block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white'
									aria-current='page'>
									Home
								</a>
							</li>
							<li>
								<a
									href='/'
									className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'>
									Company
								</a>
							</li>
							<li>
								<a
									href='/'
									className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'>
									Marketplace
								</a>
							</li>
							<li>
								<a
									href='/'
									className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'>
									Features
								</a>
							</li>
							<li>
								<a
									href='/'
									className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'>
									Team
								</a>
							</li>
							<li>
								<a
									href='/'
									className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
