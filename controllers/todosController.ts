const Todos = require('../config/db');

const todosControllers = {
  createTodos: async (req:any, res:any) => {
    try {
      const { task } = req.body;
      if (!task) return res.status(422).json({ error: 'Please enter a todo' })
      const todos = await Todos.query('INSERT INTO todos (user_id, task) VALUES ($1, $2) RETURNING *', [req.user.id, task])
      res.status(200).json({message: 'New todo added', results: todos.rows[0]})
    } catch (err) {
      res.status(500).json({ error: err });
      console.log(err);
    }
  }
}

module.exports = todosControllers;
