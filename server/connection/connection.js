const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config({path: "./vars/.env"})

// const CONNECTION_URL = "mongodb+srv://jeffyehMongoDB:jeff123123@cluster0.7lquto8.mongodb.net/?retryWrites=true&w=majority"
const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.7lquto8.mongodb.net/?retryWrites=true&w=majority`

mongoose
    .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err))


mongoose.set("strictQuery", false)

module.exports = mongoose.connection





