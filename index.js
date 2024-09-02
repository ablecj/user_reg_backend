import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import './db.js'
import userValidation from './Routes/UserValidation.js';



dotenv.config();


const PORT = 8080;

// allowed origins
const allowedOrigins = ['http://localhost:3000'];

app.use(bodyParser.json());

app.use(cors());




// test purpose
app.get('/', (req, res) => {
    res.json({message: 'API Working successfully'});
}); 


app.use('/', userValidation);





















app.listen(PORT,()=> {
    console.log(`port is working at ${PORT}`)
})




