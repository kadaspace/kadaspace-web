
const app = require('./app');
const { CONFIG } = require('./config');
const connectDb = require('./lib/db');

// UncaughtException Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

app.listen(CONFIG.PORT, () => {
	console.log(`Server running`)
	connectDb();
});

// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
});