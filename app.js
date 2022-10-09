require('dotenv').config();
const express = require('express');
const http = require('http');
const connectDB = require('./config/database');
const configExpress = require('./config/express');
const routes = require('./routes');

const app = express();
const server = http.Server(app);

connectDB();
configExpress(app);
routes(app);

module.exports = { app, server };