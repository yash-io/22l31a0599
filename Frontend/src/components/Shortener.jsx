import React, { useState } from 'react';
import './shorten.css';

const Shortener = () => {
    const [url, setUrl] = useState("");
    const [shortcode, setShortcode] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState("");   
    const [validityPeriod, setValidityPeriod] = useState("");


    const shortenUrl = async () => {

        try{
            const response = await fetch('http://localhost:5000/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ OriginalUrl: url, shortCode: shortcode, validityPeriod: validityPeriod ? validityPeriod : 30 })
            });

            const data = await response.json();
            setShortenedUrl(data.shortenedUrl);
        } catch (error) {
            console.error("Error in shortening the URL:", error);
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
        </div>
        </>
    );

}

export default Shortener;