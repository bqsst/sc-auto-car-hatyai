const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const { readdirSync } = require('fs');
const connectDB = require('./config/db');

const app = express();
const port = 5000;
connectDB();

app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(session({
   secret: 'your-secret-key',
   resave: false,
   saveUninitialized: true,
   cookie: { 
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 60
   }
}));
app.use(cors({
   origin: 'http://localhost:3000',
   credentials: true
}));

readdirSync('./routes').map((r) => {
   if (r === 'member.js') {
      app.use('/api/member', require('./routes/' + r));
   } else {
      app.use('/api', require('./routes/' + r));
   }
})

app.listen(port, () => console.log('Server is running on port 5000'));