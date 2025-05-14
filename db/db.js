const mongoose = require("mongoose");
const uri = process.env.MONGO_URI

mongoose.connect(uri)
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.log("MongoDB Connection Error", err))