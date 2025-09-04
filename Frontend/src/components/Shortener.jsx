import React, { useState } from 'react';
import './shorten.css';

const Shortener = () => {
    const [url, setUrl] = useState("");
    const [shortcode, setShortcode] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState("");
    const [isshortened, setIsShortened] = useState(false); 
    const [validityPeriod, setValidityPeriod] = useState(30);


    const shortenUrl = async () => {

        try{
            const response = await fetch('http://localhost:5000/shortUrl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ OriginalUrl: url, shortCode: shortcode, validityPeriod: validityPeriod ? validityPeriod : 30 })
            });

            const data = await response.json();
            setShortenedUrl(data.shortenedUrl);
            setIsShortened(true);
        } catch (error) {
            console.error("Error in shortening the URL:", error.message);
            window.alert("Error in shortening the URL. Please try again using another short code.");
        }
    }


    return (
        <>
        <div className="container">
            <h1 className='title'>URL Shortener</h1>
            <div className='input-group'>
                <label htmlFor="url" className='subtitle'>Enter URL:</label>
                <input 
                    type="text" 
                    placeholder="Enter URL here"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
            </div>
            <div className='input-group'>
                <label htmlFor="shortcode" className='subtitle'>Enter Shortcode:</label>
                <input 
                    type="text" 
                    placeholder="Enter shortcode here"
                    value={shortcode}
                    onChange={(e) => setShortcode(e.target.value)}
                />
            </div>
            <div className='input-group'>
                <label htmlFor="validityPeriod" className='subtitle'>Enter Validity Period:</label>
                <input 
                    type="text" 
                    placeholder="choose validity period in hours"
                    value={validityPeriod}
                    onChange={(e) => setValidityPeriod(e.target.value)}
                />
            </div>
            <button onClick={shortenUrl}>
                Shorten
            </button>
            <div className='result'>
                {isshortened && <div>
                    <p>Shortened URL: {shortenedUrl}</p>
                    <p>Validity Period: {validityPeriod} hours</p>
                    </div>}
                
            </div>
        </div>
        </>
    );

}

export default Shortener;