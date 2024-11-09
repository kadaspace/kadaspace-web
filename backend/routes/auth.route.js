const router = require('express').Router();
const { getAuthUser } = require('../controllers/auth.controller');


router.get("/me", getAuthUser)

module.exports = router;