import {useEffect, useState} from "react"

function Breweries (props) {

    const URL = "https://api.openbrewerydb.org/breweries?by_city=atlanta"

    const [brewery, setBrewery] = useState(null)
    

    const getBrewery = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setBrewery(data);
    }

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    const loaded = () => {
        return brewery.filter(brewery => brewery.brewery_type !== "planning").map((brewery) => (
          <a className="brewery-links" rel="noreferrer" href={brewery.website_url} target="_blank"><div key={brewery._id} className="brewery-card">
            <h2 className="brewery-headline">{brewery.name}</h2>
            <h3 className="brewery-details">Type: {brewery.brewery_type.charAt(0).toUpperCase() + brewery.brewery_type.slice(1)}</h3>
            <h3 className="brewery-details">{brewery.street}</h3>
            <h3 className="brewery-details">{brewery.city}</h3>
            
          </div></a>
        ));
    };

    useEffect(() => getBrewery(), []);

    return (
        <div className="breweries">
            <h2 className="brew-headline">More of a Beer Connoisseur?</h2>
            <p className="brew-copy">Check out all the breweries that Atlanta's top-rate beer community has to offer! Click any of the cards below for more details.</p>
                <div className="brewery-container">
                    {brewery ? loaded() : loading()}
                </div>
        </div>
    )
}

export default Breweries