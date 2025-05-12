require('dotenv').config()
const express = require('express');
const router = require('./routes/authRoutes')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000
const uri = process.env.MONGO_URI

app.use(bodyParser.json())

mongoose.connect(uri)
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.log("MongoDB Connection Error", err))

app.use('/api/v1', router)


app.listen(PORT, () => {
    console.log(`App Listens at port ${PORT}`);
})