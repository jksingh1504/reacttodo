import { React, useState } from "react";
import Todoitem from "./Todoitem";
import Completed from "./Completed";

const Todo = () => {
	const [value, setValue] = useState({ value: "", id: 0 });
	const [todo, setTodo] = useState([]);
	const [completed, setCompleted] = useState([]);
	const [show, setShow] = useState([]);

	const Delete = (indx) => {
		const new_todo = todo.filter((ele, ind) => indx !== ind);
		setTodo(new_todo);
	};

	const DeleteTodo = (indx) => {
		let new_todo = todo.filter((ele, ind) => {
			if (indx == ind) {
				setCompleted([...completed, ele]);
			}
			return indx !== ind;
		});
		setTodo(new_todo);
	};

	return (
		<div>
			<h1>Todo App</h1>
			<input
				type="text"
				value={value.value}
				onChange={(e) => {
					setValue({ value: e.target.value, id: Date.now() });
				}}
			/>
			<button
				onClick={() => {
					setTodo([...todo, value]);
					// console.log(todo)
					setValue({ value: "", id: 0 });
				}}
			>
				Add
			</button>
			<div>
				{todo.map((ele, indx) => (
					<Todoitem
						{...ele}
						key={ele.id}
						Delete={Delete}
						indx={indx}
						DeleteTodo={DeleteTodo}
					/>
				))}
			</div>
			<br />
			<button
				onClick={() => {
					setShow([...completed]);
				}}
			>
				Show completed Todo
			</button>
			<Completed show={show} />
		</div>
	);
};

export default Todo;
