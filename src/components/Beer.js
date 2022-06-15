import { Link } from 'react-router-dom';
import slugify from 'slugify';

function Beer(props) {
  let image = props.beer.image_url ? props.beer.image_url : '/img/glass-6.jpg';

  return (
    <div className="beer">
      <Link to={`/beer/${props.beer.id}/${slugify(props.beer.name, { lower: true })}`}>
        <h2>{props.beer.name}</h2>
        <img src={image} alt={props.beer.name} />
      </Link>
    </div>
  );
}

export default Beer;
