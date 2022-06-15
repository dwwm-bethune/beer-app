import React from 'react';
import { withRouter } from '../index';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleKeyUp = (event) => {
    if (event.key == 'Enter') {
      this.handleSearch();
    }
  }

  // Dès qu'on fait une recherche, on envoie l'utilisateur vers la page en question
  handleSearch = () => {
    this.props.router.navigate(`/recherche/${this.state.search}`);
  }

  render() {
    return (
      <div className="search">
        <input type="text" value={this.state.search} onChange={(e) => this.setState({ search: e.target.value })} onKeyUp={this.handleKeyUp} placeholder="Hoppy, Malt, Angry, New..." />
        <button onClick={this.handleSearch} disabled={!this.state.search}>Recherche</button>
      </div>
    );
  }
}

export default withRouter(Search);
