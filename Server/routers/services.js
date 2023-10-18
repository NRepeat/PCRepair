const serviceRouter = require("express").Router();
const serviceController = require("../controller/index.js")
serviceRouter.route(
	"/:type"
).get()
serviceRouter.route(
	"/all"
).get(serviceController.allServices)
module.exports = serviceRouter