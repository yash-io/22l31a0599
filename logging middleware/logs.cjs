const sendLog = async (logMessage) => {
    try {
        await fetch('http://20.244.56.144/evaluation-service/logs', {

            method: 'POST',
            headers: {
                "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: logMessage })
        });
        console.log('Log sent successfully');
    } catch (error) {
        console.error('Error sending log:', error);
    }
}

module.exports = sendLog;