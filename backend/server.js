import express from 'express';
import dotenv from 'dotenv';
import router from './routes/router.js';
import cors from 'cors';
import connectDB from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({origin:"*"})) //made this as an public api
app.use('/', router);


app.listen(PORT, async () => {
    try{
        await connectDB();
        console.log(`Server is running on port http://localhost:${PORT}`);

    }
    catch(error){
        console.error("Error starting server:", error);
    }
}); 
