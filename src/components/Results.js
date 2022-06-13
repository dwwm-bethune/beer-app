import Beer from './Beer';
import Loader from './Loader';

function Results(props) {
  if (props.loading) {
    return <Loader message="🍻 Les bières arrivent!" />;
  }

  return (
    <div className="results">
      {props.beers.map((beer) => <Beer beer={beer} key={beer.id} />)}
    </div>
  );
}

export default Results;
