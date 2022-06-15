import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="header">
      <h1>
        <Link to="/">{props.name}</Link>
      </h1>
    </div>
  );
}

export default Header;
