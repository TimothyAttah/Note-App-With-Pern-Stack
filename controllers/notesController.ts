const Notes = require('../config/db');

const notesControllers = {
	createIncomes: async (req: any, res: any) => {
		try {
			const { description, values } = req.body;
			if (!description || !values)
				return res.status(422).json({ error: 'Please enter all fields' });
			const incomes = await Notes.query(
				'INSERT INTO notes(user_id, description, title, values) VALUES($1, $2, $3) RETURNING * ',
				[req.user.id, description, values]
			);
			res
				.status(200)
				.json({ message: 'New income added', results: incomes.rows[0] });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ error: err });
		}
	},
	editNotes: async (req: any, res: any) => {
		try {
			const { description, values } = req.body;
			if (!description || !values)
				return res.status(422).json({ error: 'Please enter all fields' });
			const incomes = await Notes.query(
				'INSERT INTO notes(user_id, description, title, values) VALUES($1, $2, $3) RETURNING * ',
				[req.user.id, description, values]
			);
			res
				.status(200)
				.json({ message: 'Notes edited successfully', results: incomes.rows[0] });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ error: err });
		}
	},
	deleteNotes: async (req: any, res: any) => {
		try {
			const { description, values } = req.body;
			if (!description || !values)
				return res.status(422).json({ error: 'Please enter all fields' });
			const incomes = await Notes.query(
				'DELETE INTO notes(user_id, description, title, values) VALUES($1, $2, $3) RETURNING * ',
				[req.user.id, description, values]
			);
			res
				.status(200)
				.json({ message: 'Notes edited successfully', results: incomes.rows[0] });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ error: err });
		}
	},
	getNote: async (req: any, res: any) => {
		try {
			const { description, values } = req.body;
			if (!description || !values)
				return res.status(422).json({ error: 'Please enter all fields' });
			const notes = await Notes.query(
				'DELETE INTO notes(user_id, description, title, values) VALUES($1, $2, $3) RETURNING * ',
				[req.user.id, description, values]
			);
			res
				.status(200)
				.json({ message: 'All Notes', results: notes.rows[0] });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ error: err });
		}
	},
};
