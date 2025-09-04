

const Redirect = () => {

    const redirectUserr = async () => {
        try{
            const response = await fetch(window.location.href, {
                method: 'GET',
            });
            if(response.ok){
                window.location.href = response.url;
            }
            else{
                console.error("Redirection failed:", response.statusText);
                window.alert("Redirection failed. URL not found.");
            }
            
        } catch (error) {
            console.error("Error fetching redirect URL:", error);
        }
    };

    return (
        <div>
            <h1>Redirecting...</h1>
        </div>
    );
};

export default Redirect;
