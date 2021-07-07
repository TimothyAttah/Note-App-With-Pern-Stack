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
	listsIncomes: async (req: any, res: any) => {
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
	deleteExpenses: async (req: any, res: any) => {
		try {
			const { id } = req.params;
			const deleteExpense = await Notes.query(
				'DELETE FROM expenses WHERE expenses_id = $1 AND user_id = $2 RETURNING *',
				[id, req.user.id]
			);
			if (deleteExpense.rows.length === 0) {
				return res
					.status(403)
					.json({ error: 'This expenses is not yours. Authorization denied.' });
			}
			res.status(200).json({
				message: 'expenses deleted successfully',
				results: deleteExpense.rows[0],
			});
		} catch (err) {
			console.error(err);
			return res.status(500).json({ error: err });
		}
	},
};