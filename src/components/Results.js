function Results(props) {
    return (
        <div className="results">
            {props.beers.map((beer) =>
                <div className="beer" key={beer.id}>
                    <h2>{beer.name}</h2>
                    <img src={beer.image} alt={beer.name} />
                </div>
            )}
        </div>
    );
}

export default Results;
