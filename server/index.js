const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');
const { default: chalk } = require('chalk');
const router = require('./routes');
const { PORT, MONGO_DB } = require('./constants/index');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use('/api', router);

app.use(express.static(path.resolve('..', 'client', 'dist')));

mongoose.connect(`${MONGO_DB}`).then(() => {
    app.listen(PORT, () => {
        console.log(
            chalk.green(`Server is running on http://localhost:${PORT}`),
        );
    });
});
