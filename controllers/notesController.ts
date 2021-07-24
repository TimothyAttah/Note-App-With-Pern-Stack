const Notes = require('../config/db');

const notesControllers = {
	createIncomes: async (req: any, res: any) => {
		try {
			const { description, values } = req.body;
			if (!description || !values)
				return res.status(422).json({ error: 'Please enter all fields' });
			const incomes = await Notes.query(
				'INSERT INTO incomes(user_id, description, values) VALUES($1, $2, $3) RETURNING * ',
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
	listsNotes: async (req: any, res: any) => {
		try {
			const { description, values } = req.body;
			if (!description || !values)
				return res.status(422).json({ error: 'Please enter all fields' });
			const notes = await Notes.query(
				'INSERT INTO notes(user_id, description, values) VALUES($1, $2, $3) RETURNING * ',
				[req.user.id, description, values]
			);
			res
				.status(200)
				.json({ message: 'New note added', results: notes.rows[0] });
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
				'INSERT INTO notes(user_id, description, values) VALUES($1, $2, $3) RETURNING * ',
				[req.user.id, description, values]
			);
			res
				.status(200)
				.json({ message: 'My note', results: notes.rows[0] });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ error: err.message });
		}
	},
	deleteNote: async (req: any, res: any) => {
		try {
			const { description, values } = req.body;
			if (!description || !values)
				return res.status(422).json({ error: 'Please enter all fields' });
			const notes = await Notes.query(
				'INSERT INTO notes(user_id, description, values) VALUES($1, $2, $3) RETURNING * ',
				[req.user.id, description, values]
			);
			res
				.status(200)
				.json({ message: 'My note', results: notes.rows[0] });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ error: err.message });
		}
	}
};