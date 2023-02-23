const dotenv = require("dotenv")
dotenv.config({path: "./vars/.env"})
const jwt = require('jsonwebtoken');


const secret = process.env.ACCESS_TOKEN_SECRET;
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req, res }) {
  

		let token = req.query.token || req.headers.authorization;
    console.log(token)

		// ["Bearer", "<tokenvalue>"]
		if (req.headers.authorization) {
			token = token.split(" ").pop().trim();
		}
		else if (req.query.token) {
			token = req.query.token;
		}


		if (!token) {

			// return res.status(400).json({ message: "You have no token!" });
		}
		else {

			// verify token and get user data out of it
			try {
				const { data } = jwt.verify(token, secret, { maxAge: expiration });
       
				let user = req.user = data;
				return { user: user }

			} catch {
				console.log("Invalid token");
				return res.status(400).json({ message: "invalid token!" });
			}

			// send to next endpoint
			req.next();
		}


	},
  signToken: function ({ username, _id }) {
    const payload = { username, _id };

    let token =  jwt.sign({ data: payload }, secret, { expiresIn: expiration });
	console.log(token)
	return token
	
  },
  
};
