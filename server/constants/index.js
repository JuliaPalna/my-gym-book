require('dotenv').config({ override: true });

const PORT = process.env.NODE_PORT || 3005;
const SALT_ROUNDS = parseInt(process.env.NODE_SALT_ROUNDS, 10) || 10;
const JWT_SECRET = process.env.NODE_JWT_SECRET || 'NODE_JWT_SECRET';
const MONGO_DB = process.env.NODE_MONGO_DB;

module.exports = {
    PORT,
    SALT_ROUNDS,
    JWT_SECRET,
    MONGO_DB,
};
