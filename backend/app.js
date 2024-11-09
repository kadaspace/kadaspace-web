const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.route');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/status', (req, res) => {
	res.json({ status: 'ok', message: 'Server is running' });
})

app.use('/api/auth', authRoutes);

app.use("*", (req, res) => {
	res.status(404).json({ message: '404 Not Found' });
})

module.exports = app;