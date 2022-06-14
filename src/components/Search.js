import React from 'react';
import { withRouter } from '../index';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleSearch = () => {
    this.props.router.navigate(`/recherche/${this.state.search}`);
  }

  render() {
    return (
      <div className="search">
        <input type="text" value={this.state.search} onChange={(e) => this.setState({ search: e.target.value })} placeholder="Hoppy, Malt, Angry, New..." />
        <button onClick={this.handleSearch} disabled={!this.state.search}>Recherche</button>
      </div>
    );
  }
}

export default withRouter(Search);
