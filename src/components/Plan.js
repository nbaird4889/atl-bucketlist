import { useState } from "react"

function Plan() {
    const placeArray = ["Atlanta Beltline", "The King Center", "Oakland Cemetary", "The Fox Theatre", "Krog Tunnel", "Piedmont Park", "Jackson Street Bridge"]
    const eatArray = ["Sotto Sotto", "Ponce City Market Food Hall", "Nina and Rafi", "Krog Street Market", "Fox Bros. Bar-B-Q", "Wisteria", "Mary Mac's Tea Room", "Umi"]
    const drinkArray = ["Little Spirit", "Argosy", "Three Taverns", "Biltong Bar", "12 Cocktail Bar", "Bantam Pub", "Little 5 Corner Tavern", "The Local"]

    const [place, setPlace] = useState(null)
    const [restaurant, setRestaurant] = useState(null)
    const [bar, setBar] = useState(null)


    const getPlace = (event) => {
        event.preventDefault();
        let place = placeArray[Math.floor((Math.random() * placeArray.length))];
        let restaurant = eatArray[Math.floor((Math.random() * eatArray.length))];
        let bar = drinkArray[Math.floor((Math.random() * drinkArray.length))];
        setPlace("Where to go: " + place);
        setRestaurant("Where to eat: " + restaurant);
        setBar("Where to drink: " + bar);
    };


    return (
        <div className="plan">
            <h2 className="brew-headline" id="white">Feeling Adventurous?</h2>
            <h3 className="brew-copy" id="white">Not sure where to start? Click below and let us plan the day for you!</h3>
                <div className="random-day">
                    <h2 className="random">{place}</h2>
                    <h2 className="random">{restaurant}</h2>
                    <h2 className="random">{bar}</h2>
                </div>
            <div className="plan-btn-div">
                <button onClick={getPlace} className="plan-button">PLAN MY DAY</button>
            </div>
        </div>
    )
}

export default Plan