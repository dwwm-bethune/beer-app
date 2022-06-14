import Header from './components/Header';
import Results from './components/Results';
import Search from './components/Search';
import React from 'react';
import axios from 'axios';
import { withRouter } from './index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      loading: true,
    };
  }

  componentDidMount() {
    // On utilise la même fonction pour la recherche ou la liste des bières
    this.loadBeers(this.props.router.params.search);
  }

  loadBeers(search) {
    this.setState({ loading: true });

    let url = 'https://api.punkapi.com/v2/beers';

    if (search) {
      url += '?beer_name=' + search;
    }

    axios.get(url).then(response => {
      this.setState({ beers: response.data, loading: false });
    });
  }

  render() {
    return (
      <div className="app">
        <Header name="Beer App!" />
        <Search />
        <Results beers={this.state.beers} loading={this.state.loading} />
      </div>
    );
  }
}

export default withRouter(App);
