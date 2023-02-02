import React, { useContext } from 'react';
import { Language } from '../assets/language';
import { LanguageContext } from '../context/LanguageContext';

const Lists = () => {
	const { lang } = useContext(LanguageContext);

	return (
		<ul className='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
			<li>
				<a href='/' className='mr-4 hover:underline md:mr-6 '>
					{Language[lang].footer.aboutUs}
				</a>
			</li>
			<li>
				<a href='/' className='mr-4 hover:underline md:mr-6'>
					Privacy Policy
				</a>
			</li>
			<li>
				<a href='/' className='mr-4 hover:underline md:mr-6 '>
					Licensing
				</a>
			</li>
			<li>
				<a href='/' className='hover:underline'>
					Contact
				</a>
			</li>
		</ul>
	);
};

export default Lists;
