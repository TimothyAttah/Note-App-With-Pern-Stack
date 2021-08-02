const Todos = require('../config/db');

const todosControllers = {
	createTodos: async (req: any, res: any) => {
		try {
			const { task, isComplete } = req.body;
			if (!task) return res.status(422).json({ error: 'Please enter a todo' });
			const todos = await Todos.query(
				'INSERT INTO todos (user_id, task, isComplete) VALUES ($1, $2, $3) RETURNING *',
				[req.user.id, task, isComplete]
			);
			res
				.status(201)
				.json({ message: 'New todo added', results: todos.rows[0] });
		} catch (err) {
			res.status(500).json({ error: err });
			console.log(err);
		}
	},

	getAllTodos: async (req: any, res: any) => {
		try {
			const allTodos = await Todos.query('select * from  todos');
			res.status(200).json({
				total: allTodos.rows.length,
				todos: allTodos.rows,
			});
		} catch (err) {
			res.status(500).json({ error: err.message });
			console.error(err);
		}
	},

	getMyTodos: async (req: any, res: any) => {
		try {
			const myTodos = await Todos.query(
				'select * from todos where user_id = $1',
				[req.user.id]
			);

			res.status(200).json({
				total: myTodos.rows.length,
				todos: myTodos.rows,
			});
		} catch (err) {
			res.status(500).json({ error: err.message });
			console.error(err);
		}
	},

	getATodo: async (req: any, res: any) => {
		try {
			const { id } = req.params;
			const todos = await Todos.query(
				'select * from todos where todo_id = $1 returning *',
				[id]
			);
			console.log(todos);

			res.status(200).json({ message: 'Success', todos: todos.rows[0] });
		} catch (err) {
			res.status(500).json({ error: err.message });
			console.error(err);
		}
	},

	updateTodos: async (req: any, res: any) => {
		try {
			const { id } = req.params;
			const { task } = req.body;
			const updateTodo = await Todos.query(
				'UPDATE todos SET task = $1 WHERE todo_id = $2 AND user_id = $3 RETURNING *',
				[task, id, req.user.id]
			);
			if (updateTodo.rows.length === 0) {
				return res
					.status(403)
					.json({ error: 'This todo is not yours. Authorization denied.' });
			}
			res.status(200).json({
				message: 'Todo updated successfully!!!',
				results: updateTodo.rows[0],
			});
		} catch (err) {
			res.status(500).json({ error: err });
			console.log(err);
		}
	},
	deleteTodos: async (req: any, res: any) => {
		try {
			const { id } = req.params;
			const deleteTodo = await Todos.query(
				'DELETE FROM todos WHERE todo_id = $1 AND user_id = $2 RETURNING *',
				[id, req.user.id]
			);
			if (deleteTodo.rows.length === 0) {
				return res
					.status(403)
					.json({ error: 'This todo is not yours. Authorization denied.' });
			}
			res.status(200).json({
				message: 'Todo deleted successfully',
				results: deleteTodo.rows[0],
			});
		} catch (err) {
			res.status(500).json({ error: err });
			console.log(err);
		}
	},
};

module.exports = todosControllers;
