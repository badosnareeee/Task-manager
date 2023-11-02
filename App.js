const express = require ("express")
const app = express()
const port = 3000
const tasks = require ("./routes/tasks")
const products = require ("./routes/products")
const connectDB = require("./DB/connect")
require("dotenv").config()

app.use(express.json())
app.use("/api/tasks",tasks)
app.use("/api/v1/products",products)

const start = async () => {
    try {
        await connectDB (process.env.MONGO_URL);
        app.listen(port,() => {
            console.log (`Server is listening on ${port} >>>>>>>>>>>>`)
        }) 
    } catch (error) {
        console.log(error)
    }
}
start()

