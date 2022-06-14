import { Link } from 'react-router-dom';
import slugify from 'slugify';

function Beer(props) {
  return (
    <div className="beer">
      <Link to={`/beer/${props.beer.id}/${slugify(props.beer.name, { lower: true })}`}>
        <h2>{props.beer.name}</h2>
        <img src={props.beer.image_url} alt={props.beer.name} />
      </Link>
    </div>
  );
}

export default Beer;
