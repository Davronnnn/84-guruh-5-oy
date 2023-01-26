import React, { useRef, useState } from 'react';
import Todo from './Todo';

const Todos = () => {
	const input = useRef();
	const [type, setType] = useState({
		type: 'add',
		id: null,
	});
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: 'title 1',
			completed: true,
		},
		{
			id: 2,
			title: 'title 2',
			completed: true,
		},
		{
			id: 3,
			title: 'title 3',
			completed: true,
		},
		{
			id: 4,
			title: 'title 4',
			completed: true,
		},
	]);
	const [completeTodos, setCompleteTodos] = useState([]);
	const addTodoHandler = () => {
		const newTodo = {
			id: todos[todos.length - 1] ? todos[todos.length - 1].id + 1 : 0,
			title: input.current.value,
		};

		setTodos([...todos, newTodo]);

		input.current.value = '';
	};

	const editHandler = (id) => {
		setType({
			type: type.type === 'add' ? 'edit' : 'add',
			id: id,
		});
	};

	const editTodoHandler = () => {
		const result = todos.map((todo) => {
			if (todo.id === type.id) {
				todo.title = input.current.value;
				todo.completed = false;
			}
			return todo;
		});
		setTodos(result);
	};

	const deleteHandler = (id) => {
		console.log(id);
		const result = todos.filter((todo) => {
			if (todo.id !== id) {
				return todo;
			}
		});

		setTodos(result);
	};

	const completeHandler = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		);
	};

	const findCompleteHandler = () => {
		const result = todos.filter((todo) => {
			if (todo.completed === true) {
				return todo;
			}
		});

		setCompleteTodos(result);
	};

	const findUnCompleteHandler = () => {
		const result = todos.filter((todo) => {
			if (todo.completed !== true) {
				return todo;
			}
		});

		setCompleteTodos(result);
	};
	const allTodoHandler = () => {
		setCompleteTodos([]);
	};

	return (
		<div className='card'>
			<div className='card-header'>
				<input
					ref={input}
					type='text'
					placeholder='Add todo'
					className='form-control'
				/>
				{type.type === 'add' ? (
					<button
						onClick={addTodoHandler}
						className='btn btn-primary form-control'>
						Add todo
					</button>
				) : (
					<button
						onClick={editTodoHandler}
						className='btn btn-primary form-control'>
						Edit todo
					</button>
				)}
				<div className='d-flex justify-content-center'>
					<button
						onClick={findCompleteHandler}
						className='btn btn-primary my-3 mx-2'>
						Completed
					</button>
					<button
						onClick={findUnCompleteHandler}
						className='btn btn-warning my-3 mx-2'>
						Uncompleted
					</button>
					<button
						onClick={allTodoHandler}
						className='btn btn-warning my-3 mx-2'>
						All
					</button>
				</div>
			</div>
			<div className='card-body'>
				<ul className='list-group'>
					{completeTodos.length > 0
						? completeTodos.map((todo) => (
								<Todo
									complete={completeHandler}
									deleteTodo={deleteHandler}
									todo={todo}
									key={todo.id}
									editHandler={editHandler}
								/>
						  ))
						: todos.map((todo) => (
								<Todo
									complete={completeHandler}
									deleteTodo={deleteHandler}
									todo={todo}
									key={todo.id}
									editHandler={editHandler}
								/>
						  ))}
				</ul>
			</div>
		</div>
	);
};

export default Todos;
