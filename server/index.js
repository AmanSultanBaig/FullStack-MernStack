require('dotenv').config();
const express = require("express")
const cors = require("cors")
const db_connection = require('./config/db')

const app = express();

if (process.env.NODE_ENV === 'development') {
    db_connection.connect(process.env.DB_URL_DEV)
} else if (process.env.NODE_ENV === 'production') {
    db_connection.connect(process.env.DB_URL_PROD)
}

app.use(express.json())
app.use(cors())

let port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Application is running on port ${port}`))
