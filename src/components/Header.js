function Header({ lang, changeLanguage, children }) {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
				<ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
					<li className='nav-item active'>
						<a className='nav-link' href='/'>
							{lang === 'uz'
								? 'Uy'
								: lang === 'ru'
								? 'Дом'
								: 'Home'}
							<span className='sr-only'>(current)</span>
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/'>
							{lang === 'uz'
								? 'Havola'
								: lang === 'ru'
								? 'Линк'
								: 'Link'}
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link disabled' href='/'>
							Disabled
						</a>
					</li>
				</ul>
				<form className='form-inline my-2 my-lg-0'>
					<input
						className='form-control mr-sm-2'
						type='search'
						placeholder='Search'
						aria-label='Search'
					/>
				</form>
				<select
					onChange={changeLanguage}
					className='px-3'
					name=''
		
					id=''>
					<option value='uz'>Uz</option>
					<option value='ru'>Ru</option>
					<option value='en'>En</option>
				</select>
				{children}
			</div>
		</nav>
	);
}

export default Header;
