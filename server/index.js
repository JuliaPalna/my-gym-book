const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { default: chalk } = require('chalk');

const { PORT, MONGO_DB } = require('./constants/index');

const app = express();
app.use(express.static('../client/dist'));

app.use(cookieParser());
app.use(express.json());

mongoose.connect(`${MONGO_DB}`).then(() => {
    app.listen(PORT, () => {
        console.log(
            chalk.green(`Server is running on http://localhost:${PORT}`),
        );
    });
});
