function Restaurants() {
    return (
        <div className="places">
            <div className="restaurants-image">
                <img className="inman" src="https://res.cloudinary.com/dhbumhhh1/image/upload/c_scale,w_800/v1643913094/atlanta-project/food_svjynv.png" alt="inman-park" />
            </div>
            <div className="restaurants-copy">
                <h2 className="places-headline">Where to Eat</h2>
                <p className="places-intro">Atlanta's restaurant scene is booming. With hidden gems in every corner, you really can't go wrong.</p>
                <ul className="places-bullets">
                    <li className="places-bullet">Sotto Sotto</li>
                    <li className="places-bullet">Ponce City Market Food Hall</li>
                    <li className="places-bullet">Nina and Rafi</li>
                    <li className="places-bullet">Krog Street Market</li>
                    <li className="places-bullet">Boca Lupo</li>
                    <li className="places-bullet">Fox Bros. Bar-B-Q</li>
                    <li className="places-bullet">Wisteria</li>
                    <li className="places-bullet">Mary Mac's Tea Room</li>
                    <li className="places-bullet">Umi</li>
                </ul>
            </div>
        </div>
    )
}

export default Restaurants;