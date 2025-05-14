require('dotenv').config()
const express = require('express');
const router = require('./routes/authRoutes')
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/db')

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use('/api/v1', router)

connectDB();

app.listen(PORT, () => {
    console.log(`App Listens at port ${PORT}`);
})