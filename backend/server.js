const express = require('express');
const cors = require('cors');
const usersRouter = require('./app/api/users');
const api = require('./app/api');

// Random test stuff module
const test = require('./test');
test();

const port = 3000;
const app = express();

app.use(cors({origin:'http://localhost:5100'}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api',api);
app.use('/',usersRouter);

app.listen(port, () => console.log(`Running Attendance App on ${port}`));
