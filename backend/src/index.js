//INDEX

const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');
const app = express();
//SERVICES
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
//PORT
app.listen(3333);
