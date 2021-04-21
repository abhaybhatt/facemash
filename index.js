import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import profileRoutes from './routes/post.js';

const app = express();
const CONNECTION_URL = "mongodb://localhost:27017/facemash";
const port = process.env.PORT || 5000;


app.use(bodyParser.json({ limit:"30mb" , extended:true}));
app.use(bodyParser.urlencoded({ limit:"30mb" , extended:true}));
app.use(cors());


app.use('/profile',profileRoutes);

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex: true
})
.then(()=> app.listen(port,()=> console.log(`server running at ${port}`)))
.catch((err)=> console.log(err.message));