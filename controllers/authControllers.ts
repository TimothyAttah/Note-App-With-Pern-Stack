const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const token = require('../utils/jwtGenerator');
const User = require('../config/db');

const authController: any = {
  signUp: async (req: any, res: any) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      if (!firstName || !lastName || !email || !password)
        return res.status(422).json({ error: 'Please fill in all required fields.' });
      
      const users = await User.query('SELECT * FROM users WHERE user_email = $1', [email])
      if(users.rows.length !== 0) return res
				.status(422)
        .json({ error: 'User with that email already exists.' });
      
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await User.query(
        'INSERT INTO users (first_name, last_name, user_email, user_password) VALUES($1, $2, $3, $4) RETURNING *',
        [firstName, lastName, email, hashedPassword]
      );

       res.json({message: 'Signup successfully', users: user.rows[0]})
     
   } catch (err) {
     console.error(err.message);
     res.status(500).json({error: err.message})
   }
  },
  
  signIn: async (req: any, res: any) => {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res.status(422).json({ error: 'Please enter email and password.' })
      
      const users = await User.query(
        'SELECT * FROM users WHERE user_email = $1', [email]
      )
      if(users.rows.length === 0) return res.status(422).json({error: 'User with that email does not exists.'})

      const validPassword = await bcrypt.compare(password, users.rows[0].user_password);
      if (!validPassword) return res.status(422).json({ error: 'Password or Email is incorrect.' })
      
      const token = await jwt.sign({ user: users.rows[0].user_id }, process.env.JWT_SECRET, { expiresIn: '1hr' });

      users.rows[0].user_password = undefined;
      res.status(200).json({message: 'Signin Successfully', token, results: users.rows[0]})
      
    } catch (err) {
      res.status(500).json({ error: err.message })
      console.error(err)
    }
  }
}

module.exports = authController;
