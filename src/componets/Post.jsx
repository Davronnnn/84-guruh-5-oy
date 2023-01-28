import React from 'react';
import styles from './post.module.css';
import { Title } from './Title.styled';

const Post = (props) => {
	const { data } = props;
	return (
		<div>
			{/* <h2 className={`${styles.title} ${styles.description}`}>
				{data.title}
			</h2> */}
			<div className='parent'>
				<Title color='green' fontBigger={true}>
					{data.title}
				</Title>
			</div>
			<Title color='red'>{data.title}</Title>
		</div>
	);
};

export default Post;
