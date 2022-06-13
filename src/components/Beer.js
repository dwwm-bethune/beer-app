function Beer(props) {
    return (
        <div className="beer">
            <h2>{props.beer.name}</h2>
            <img src={props.beer.image_url} alt={props.beer.name} />
        </div>
    );
}

export default Beer;
