import Header from './components/Header';
import Results from './components/Results';
import Search from './components/Search';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.loadBeers();
  }

  loadBeers() {
    axios.get('https://api.punkapi.com/v2/beers').then(response => this.setState({ beers: response.data, loading: false }));
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

export default App;
