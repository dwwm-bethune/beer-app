import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <h1 className="header">
      <Link to="/">{props.name}</Link>
    </h1>
  );
}

export default Header;
