
const CONFIG = {
	PORT: process.env.PORT || 8000,
	DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/kadaspace-dev',
}

module.exports = { CONFIG };