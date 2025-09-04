import express from 'express';
import urlModel from '../models/urlschema';


const router = express.Router();   


router.post("/shorten", async (req, res) => {
    try{
        const { OriginalUrl, shortCode, validityPeriod } = req.body;

        if(!OriginalUrl || !shortCode || !validityPeriod){
            return res.status(400).json({ message: "Enter all fields" });
        }

        const urlExists = await urlModel.findOne({ shortCode });

        if(urlExists){
            return res.status(400).json({ message: "Shortcode already exists. Please choose another one." });
        } //check whether the shortcode is already used or not  

        const newUrl = new urlModel({
                originalUrl: OriginalUrl,
                shortCode: shortCode,
                validityPeriod: validityPeriod
        });
    }
    catch(error){
        console.error("Error in /shorten route:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }

});

export default router;