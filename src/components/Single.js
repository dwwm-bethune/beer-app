import React from 'react';
import Header from './Header';
import axios from 'axios';
import { withRouter } from '../index';

class Single extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {},
    };
  }

  componentDidMount() {
    this.loadBeer(this.props.router.params.id);
  }

  loadBeer(id) {
    axios.get(`https://api.punkapi.com/v2/beers/${id}`).then(response => this.setState({ beer: response.data[0] }));
  }

  renderAbv(beer) {
    if (!beer.abv) return;

    return <div className="abv">Alc. <strong>{beer.abv}%</strong></div>;
  };

  renderStyle(beer) {
    if (!beer.food_pairing) return;
    return (
      <div className="style">
        <h3>Food Pairing</h3>
        <ul>
          {beer.food_pairing.map((food, key) => <li key={key}>{food}</li>)}
        </ul>
      </div>
    );
  };

  renderIbu(beer) {
    if (!beer.ibu) return;
    let stars = Math.ceil(beer.ibu * 5 / 100);
    return (
      <div className="ibu">
        <h3>Ibu {beer.ibu}</h3>
        {[1, 2, 3, 4, 5].map(i => <span className={`circle ${stars >= i ? 'active' : ''}`} key={i}></span>)}
      </div>
    );
  };

  renderGlass(beer) {
    if (!beer.ebc) return;
    let randomGlass = Math.floor(Math.random() * 12) + 1;
    randomGlass = Math.max(beer.ebc % 12, 1);
    return (
      <div className="glass">
        <img src={`/img/glass-${randomGlass}.jpg`} alt={beer.name} />
        <h3>EBC {beer.ebc} (Glass {randomGlass})</h3>
      </div>
    );
  };

  render() {
    return (
      <div className="app">
        <Header name="Beer App!" />
        <div className="single">
          <div className="flex">
            <div className="label">
              <img src={this.state.beer.image_url} alt={this.state.beer.name} />
            </div>

            <div className="desc">
              <h2>{this.state.beer.name}</h2>
              <p>{this.state.beer.description}</p>
            </div>
          </div>

          {this.renderAbv(this.state.beer)}

          <div className="deets">
            <div style={{flexGrow: 1}}>
              {this.renderStyle(this.state.beer)}
              {this.renderIbu(this.state.beer)}
            </div>
            {this.renderGlass(this.state.beer)}
          </div>

          <div className="order-container">
            <button className="order">Commander</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Single);
