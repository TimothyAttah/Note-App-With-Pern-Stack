const Incomes = require('../config/db');

const incomeControllers = {
  createIncomes: async (req: any, res: any) => {
    try {
      const { description, values } = req.body;
      if (!description || !values)
        return res.status(422).json({ error: 'Please enter all fields' });
      const incomes = await Incomes.query(
        'INSERT INTO incomes(user_id, description, values) VALUES($1, $2, $3) RETURNING * ',
        [req.user.id, description, values]
      );
      res.status(200).json({message: 'New income added', results: incomes.rows[0]})
    } catch (err) {
      console.error(err)
      return res.status(500).json({ error: err })
    }
  },
  getIncomes: async (req: any, res: any) => {
    try {
      const incomes = await Incomes.query(
				'SELECT * FROM users LEFT JOIN incomes ON users.user_id = incomes.user_id WHERE users.user_id = $1',
				[req.user.id]
      );
       res.status(200).json({ incomes: incomes.rows });
    } catch (err) {
       console.error(err);
				return res.status(500).json({ error: err });
    }
  },
  editIncomes: async (req: any, res: any) => {
    try {
      const { description, values } = req.body;
      const { id } = req.params;
      const incomes = await Incomes.query(
				'UPDATE incomes SET (description, values) = ($1, $2) WHERE incomes_id = $3 AND user_id = $4 RETURNING *',
				[description, values, id, req.user.id]
      );
       if (incomes.rows.length === 0) {
					return res
						.status(403)
						.json({ error: 'This todo is not yours. Authorization denied.' });
				}
				res
					.status(200)
					.json({
						message: 'Todo updated successfully',
						results: incomes.rows[0],
					});
    } catch (err) {
       console.error(err);
				return res.status(500).json({ error: err });
    }
  }
}

module.exports = incomeControllers;
