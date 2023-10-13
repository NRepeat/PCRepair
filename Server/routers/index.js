const express = require('express');
const rootRouter = express.Router();
const serviceRouter = require('./services')

rootRouter.use("/service",serviceRouter)




module.exports = rootRouter;
