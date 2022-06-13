import Loader from './Loader';

function Results(props) {
    if (props.loading) {
        return <Loader message="🍻 Les bières arrivent!" />;
    }

    return (
        <div className="results">
            {props.beers.map((beer) =>
                <div className="beer" key={beer.id}>
                    <h2>{beer.name}</h2>
                    <img src={beer.image_url} alt={beer.name} />
                </div>
            )}
        </div>
    );
}

export default Results;
