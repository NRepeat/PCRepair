const emailRouter = require("express").Router();
const serviceController = require("../controller/index.js")

emailRouter.route('/send').post(serviceController.sendEmail)

module.exports = emailRouter 