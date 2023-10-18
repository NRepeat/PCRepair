const express = require('express');
const rootRouter = express.Router();
const serviceRouter = require('./services')
const emaileRouter = require('./email')
rootRouter.use("/service",serviceRouter)
rootRouter.use("/email",emaileRouter)




module.exports = rootRouter;
