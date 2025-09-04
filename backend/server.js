import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({origin:"*"})) //made this as an public api
app.use('/', router);


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
}); 
