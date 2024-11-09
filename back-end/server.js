const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const { readdirSync } = require('fs');
const connectDB = require('./config/db');

const app = express();
const port = 5000;
connectDB();

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json({ limit: '20mb' }))

readdirSync('./routes').map((r) => {
    if (r === 'member.js') {
        app.use('/api/member', require('./routes/' + r));
    } else {
        app.use('/api', require('./routes/' + r));
    }
})

app.listen(port, () => console.log('Server is running on port 5000'));