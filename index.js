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
const allowedOrigins = [
  // 'http://localhost:3000',  // For local development
  'https://user-reg-frontend.vercel.app'  // Your hosted frontend
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(bodyParser.json());




// test purpose
app.get('/', (req, res) => {
    res.json({message: 'API Working successfully'});
}); 


app.use('/', userValidation);





















app.listen(PORT,()=> {
    console.log(`port is working at ${PORT}`)
})




