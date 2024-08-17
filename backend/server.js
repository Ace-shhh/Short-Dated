require('dotenv').config()
const express = require('express')
const productRoutes = require('./routes/products')
const mongoose = require('mongoose')
//express to app
const app = express();

// app.get('/', (req, res) =>{
//     res.json({messg: 'Welcome to the app'})
// })

//middleware
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/products', productRoutes)

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>{
            console.log('connected to db and listening on port', process.env.PORT)
        });
    })
    .catch((error) => {
        console.log(error)
    })

