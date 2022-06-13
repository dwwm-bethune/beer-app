import Header from './components/Header';
import Results from './components/Results';
import Search from './components/Search';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [
        { name: 'Bière 1', image: 'logo192.png' },
        { name: 'Bière 2', image: 'logo192.png' },
        { name: 'Bière 3', image: 'logo192.png' },
        { name: 'Bière 4', image: 'logo192.png' },
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <Header name="Beer App!" />
        <Search />
        <Results beers={this.state.beers} />
      </div>
    );
  }
}

export default App;
