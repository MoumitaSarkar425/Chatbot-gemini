const express = require('express')
const app = express()
const cors = require('cors');
const geminiRouter = require('./router/geminiRouter');
require('dotenv').config();


app.use(cors({
    origin: '*'
}));
app.use(express.json());


app.use('/api',geminiRouter);


app.listen(process.env.PORT, () => {
  console.log('okk')
})