import React from 'react';

const Todo = ({ todo, deleteTodo, complete, editHandler }) => {
	return (
		<li className='list-group-item d-flex justify-content-between'>
			<p
				onClick={() => complete(todo.id)}
				style={{
					textDecoration: todo?.completed ? 'line-through' : '',
				}}>
				{todo.title}
			</p>

			<div>
				<button
					onClick={() => editHandler(todo.id)}
					className='btn btn-info text-white mx-2'>
					Edit
				</button>
				<button
					onClick={() => deleteTodo(todo.id)}
					className='btn btn-danger'>
					Delete
				</button>
			</div>
		</li>
	);
};

export default Todo;
