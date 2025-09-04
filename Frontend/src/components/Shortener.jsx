import React, { useState } from 'react';


const Shortener = () => {
    const [url, setUrl] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState("");   
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);



    return (
        <>
        <div className="container">
            <h1>URL Shortener</h1>
            <h3>Enter a URL to shorten</h3>
            <input 
                type="text" 
                placeholder="Enter URL here"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
        </div>
        </>
    );

}

export default Shortener;