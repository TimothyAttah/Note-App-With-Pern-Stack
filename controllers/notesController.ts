const Notes = require('../config/db');

const notesControllers = {
	createIncomes: async (req: any, res: any) => {
		try {
			const { description, values } = req.body;
			if (!description || !values)
				return res.status(422).json({ error: 'Please enter all fields' });
			const incomes = await Notes.query(
				'INSERT INTO notes(user_id, description, values) VALUES($1, $2, $3) RETURNING * ',
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
	getExpenses: async (req: any, res: any) => {
		try {
			const expenses = await Notes.query(
				'SELECT * FROM users LEFT JOIN expenses ON users.user_id = expenses.user_id WHERE users.user_id = $1',
				[req.user.id]
			);
			res.status(200).json({ expenses: expenses.rows });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ error: err });
		}
	},
	editExpenses: async (req: any, res: any) => {
		try {
			const { description, values } = req.body;
			const { id } = req.params;
			const expenses = await Expenses.query(
				'UPDATE expenses SET (description, values) = ($1, $2) WHERE expenses_id = $3 AND user_id = $4 RETURNING *',
				[description, values, id, req.user.id]
			);
			if (expenses.rows.length === 0) {
				return res
					.status(403)
					.json({ error: 'This expenses is not yours. Authorization denied.' });
			}
			res.status(200).json({
				message: 'expenses updated successfully',
				results: expenses.rows[0],
			});
		} catch (err) {
			console.error(err);
			return res.status(500).json({ error: err });
		}
	},
};
