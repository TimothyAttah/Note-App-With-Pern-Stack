require('dotenv').config({ path: './config/.env' });
const express = require('express');
const cors = require('cors');

const connectingDB = require('./config/db');

const app = express();
connectingDB();

app.use(express.json());
app.use(cors());

// app.use('/', (req: any, res: any) => {
//   res.send('Hello from Note3Sixty')
// })

app.use('/api/users', require('./routes/authRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
})
