function Bars() {
    return (
        <div className="places">
            <div className="places-image">
                <img className="inman" src="https://res.cloudinary.com/dhbumhhh1/image/upload/c_scale,h_500/v1643911719/atlanta-project/places_giosmy.png" alt="inman-park" />
            </div>
            <div className="places-copy">
                <h2 className="places-headline">What to Drink</h2>
                <p className="places-intro">In the mood for a cold beer? Or maybe you prefer a one-of-a-kind cocktail from a mixologist? We've got you covered.</p>
                <ul className="places-bullets">
                    <li className="places-bullet">Little Spirit</li>
                    <li className="places-bullet">Argosy</li>
                    <li className="places-bullet">Dr. Scofflaw</li>
                    <li className="places-bullet">Three Taverns Brewery</li>
                    <li className="places-bullet">Biltong Bar</li>
                    <li className="places-bullet">12 Cocktail Bar</li>
                    <li className="places-bullet">Bantam Pub</li>
                </ul>
            </div>
        </div>
    )
}

export default Bars;