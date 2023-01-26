function Card(props) {
	return (
		<div className='card col-3'>
			<img src={props?.element?.img} className='card-img-top' alt='...' />
			<div className='card-body'>
				<h5 className='card-title'>{props?.element?.title}</h5>
				<p className='card-text'>{props?.element?.text}</p>
				<a href='/' className='btn btn-primary'>
					Go somewhere
				</a>
			</div>
			<p className='asdas'>asdasd</p>
		</div>
	);
}

export default Card;
