import { Link } from 'react-router-dom';

function Beer(props) {
  return (
    <div className="beer">
      <Link to={`/beer/${props.beer.id}/${props.beer.name}`}>
        <h2>{props.beer.name}</h2>
        <img src={props.beer.image_url} alt={props.beer.name} />
      </Link>
    </div>
  );
}

export default Beer;
