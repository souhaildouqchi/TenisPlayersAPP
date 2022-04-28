const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();
const app = express();

// to get the body of the request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/players", require("./routes/playerRoutes"));
// override default error handler from express
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
