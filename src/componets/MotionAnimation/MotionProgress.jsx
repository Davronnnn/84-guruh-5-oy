import { motion, useScroll } from 'framer-motion';
import React from 'react';

const MotionProgress = () => {
	const { scrollYProgress } = useScroll();

	return (
		<motion.path
			d='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
			style={{ pathLength: scrollYProgress }}
		/>
	);
};

export default MotionProgress;
