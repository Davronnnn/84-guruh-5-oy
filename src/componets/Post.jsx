import React from 'react';

const Post = (props) => {
	const { data } = props;
	return (
		<div>
			{/* <h2 className={`${styles.title} ${styles.description}`}>
				{data.title}
			</h2> */}
			<div className='parent'>
				<p>{data.title}</p>
			</div>
			<div>{data.title}</div>
		</div>
	);
};

export default Post;
