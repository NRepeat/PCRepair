const servicesJSONdata = require('../json/services.json')

module.exports.allServices = async (req, res, next) => {
	try {

		res.send({ data: servicesJSONdata })
	} catch (error) {
		next(error)
	}
}