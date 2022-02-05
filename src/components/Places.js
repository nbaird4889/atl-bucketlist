function Places() {
    return (
        <div className="places">
            <div className="places-image">
                <img className="inman" src="https://res.cloudinary.com/dhbumhhh1/image/upload/v1643911719/atlanta-project/inman_cwrzdj.png" alt="inman-park" />
            </div>
            <div className="places-copy">
                <h2 className="places-headline">Places to Go</h2>
                <p className="places-intro">Whether you are looking to learn about Atlanta's important history or catch a game at the new Mercedes Benz stadium, Atlanta has it all.</p>
                <ul className="places-bullets">
                    <li className="places-bullet">Atlanta Beltline</li>
                    <li className="places-bullet">The King Center</li>
                    <li className="places-bullet">Oakland Cemetery</li>
                    <li className="places-bullet">The Fox Theatre</li>
                    <li className="places-bullet">Krog Tunnel</li>
                    <li className="places-bullet">Piedmont Park</li>
                    <li className="places-bullet">Jackson Street Bridge</li>
                </ul>
            </div>
        </div>
    )
}

export default Places;