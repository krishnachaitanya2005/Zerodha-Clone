require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
	try {
		return jwt.sign({ id }, process.env.TOKEN_KEY, {
			expiresIn: 3 * 24 * 60 * 60,
		});
	} catch (error) {
		console.error("Error creating token:", error);
		return null;
	}
};
