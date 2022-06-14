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

  componentDidUpdate(prevProps) {
    let currentSearch = this.props.router.params.search;
    let oldSearch = prevProps.router.params.search;

    // Si on fait une recherche ou qu'on fait une recherche différente de celle précédente
    if (currentSearch != oldSearch) {
      this.loadBeers(currentSearch);
    }
  }

  loadBeers(search) {
    this.setState({ loading: true });

    // On va chercher les beers dans le localStorage
    let beers = localStorage.getItem('beers-' + search);

    if (beers) {
      this.setState({ beers: JSON.parse(beers), loading: false });
      return;
    }

    let url = 'https://api.punkapi.com/v2/beers';

    if (search) {
      url += '?beer_name=' + search;
    }

    axios.get(url).then(response => {
      this.setState({ beers: response.data, loading: false });

      // On sauvegarde les bières dans le localStorage pour aller les chercher plus tard
      localStorage.setItem('beers-' + search, JSON.stringify(response.data));
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
