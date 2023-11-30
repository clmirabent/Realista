const express = require('express')
const userRouter = require('../user-controllers/user');

const router = express.Router();

router.use('/user', userRouter);

module.exports = router;