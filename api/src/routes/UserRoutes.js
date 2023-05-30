const { Router } = require('express');
const { UserController } = require('../controllers');

const userRouter = Router();

userRouter.get('', (req, res) => new UserController(res, res).getAll);

module.exports = userRouter;