const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const rootroute = require("./routes/rootrouter");
const productroute = require("./routes/productroute")
const connectDB = require("./config/db");

const PORT = process.env.PORT ||8080; // Fix the port configuration
const app = express();

// Middleware
app.use(morgan("dev")); // Optional: for logging requests

// Connect to the database
connectDB();

// app.get("/", (req, res) => {
//     res.send("API is working");
// });

app.get("/", (req, res) => {
    res.send("API is working");
});

app.use('/fashion', productroute);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`.bgBlue.white);
});
