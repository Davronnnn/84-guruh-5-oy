import { motion } from 'framer-motion';
import React from 'react';

const MotionOpacity = ({ children }) => {
	return (
		<motion.div className='w-1/4 rounded overflow-hidden shadow-lg'>
			<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
				{children}
			</motion.div>
		</motion.div>
	);
};

export default MotionOpacity;
