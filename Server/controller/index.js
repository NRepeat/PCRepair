const servicesJSONdata = require('../json/services.json')
const nodemailer = require('nodemailer');

module.exports.allServices = async (req, res, next) => {
	try {

		res.send({ data: servicesJSONdata })
	} catch (error) {
		next(error)
	}
}


const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'nnazarov55@gmail.com',
		pass: '*****',
	},
});

module.exports.sendEmail = async (req, res, next) => {

	try {
		const mailOptions = {
			from: '“Nikita” sender@server.com',
			to: req.body.email,
			subject: "Message title",
			text: req.body.message, // Use the message from the request
			html: "<p>HTML version of the message</p> "

		};

		const info = await transporter.sendMail(mailOptions);
		console.log('Message Sent:', info.response);

		return info;
	} catch (error) {
		console.error('Error sending email:', error);
		throw error;
	}
};
