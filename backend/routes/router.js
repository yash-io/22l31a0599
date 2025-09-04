import express from 'express';
import urlModel from '../models/urlschema.js';
import sendLog from '../../logging middleware/logs.cjs';

const router = express.Router();   
const generateShortCode = () => {
    return Math.random().toString(36).substring(2, 8); //generates random shortcode based on math module
}

router.post("/shortUrl", async (req, res) => {
    try{
        const { OriginalUrl, shortCode, validityperiod } = req.body;
        const validityPeriod = new Date(Date.now() + (validityperiod || 30) * 60 * 60 * 1000); //default validity period is 30 hours

        if(!OriginalUrl|| !validityPeriod){
            return res.status(400).json({ message: "Enter all fields" });
        }
        if(!shortCode){
            shortCode = generateShortCode();
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
    await newUrl.save();
    return res.status(201).json({ shortenedUrl: `http://localhost:5000/${shortCode}`,
         validityPeriod: validityPeriod 
    });

    sendLog({
        "stack":"backend",
        "level":"success",
        "package":"router",
        "message":`URL shortened successfully: ${shortCode}`
    });
    }
    catch(error){
        console.error("Error in /shorten route:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }

});

router.get("/:code", async (req, res) => {
    try{
        const { code } = req.params;
        const urlEntry = await urlModel.findOne({ shortCode: code });

        if(!urlEntry){
            return res.status(404).json({ message: "URL not found" });
            console.log("URL not found");
        }

        res.redirect(urlEntry.originalUrl);
    }
    catch(error){
        console.error("Error in /:code route:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }

});

export default router;