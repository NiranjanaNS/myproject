import express from 'express';

import mongoose from 'mongoose';

import session from 'express-session';

import userRoutes from './routers/userRoutes.js';

import productRoutes from './routers/productRoutes.js';

const app = express();
app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(session({
    secret: 'secret_key',
    saveUninitialized: true,
    resave: false
}))



app.set('view engine', 'ejs')

const uri = 'mongodb://localhost:27017/postman';

mongoose.connect(uri)
.then(() => console.log("connected to db"))
.catch((err) => console.log(err))

app.use(userRoutes);
app.use(productRoutes);

app.listen(5000, () => {
    console.log('successful')
}); 