
const mongoose = require('mongoose');
const { CONFIG } = require('../config');

const connectDb = async () => {
	try {
		await mongoose.connect(CONFIG.DB_URI);
		console.log('MongoDB connected');
	} catch (error) {
		console.log(`Error: ${error.message}`);
		process.exit(1);
	}
}

module.exports = connectDb;