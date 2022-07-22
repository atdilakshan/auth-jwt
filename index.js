// builtin modules require
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const app = express();

dotenv.config();

mongoose.connect( process.env.DB_URL, {useNewUrlparser: true, useUnifiedTopology: true}, () => {
    console.log("DB Connect");
})

app.use(express.json());
app.use(cookieParser());

// Routes
const authRoutes = require("./routes/authRoutes");

app.use("/api/user", authRoutes);

app.listen(5000, () => {
    console.log('listening on port');
})