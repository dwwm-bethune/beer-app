import React from 'react';
import Header from './Header';
import Loader from './Loader';
import axios from 'axios';
import { withRouter } from '../index';

class Single extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {},
      loading: true
    };
  }

  componentDidMount() {
    this.loadBeer(this.props.router.params.id);
  }

  loadBeer(id) {
    axios.get(`https://api.punkapi.com/v2/beers/${id}`).then(response => this.setState({ beer: response.data[0], loading: false }));
  }

  // J'ai séparé l'affichage de chaque élément dans des fonctions render...
  // Cela simplifie l'affichage en JSX avec les ifs...
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

  // Pour l'IBU, on affiche 1 cercle jaune de 0 à 20, 2 cercles de 20 à 40...
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

  // On affiche le verre 1 pour un ebc à 1, le verre 12 pour un ebc à 24 avec le modulo....
  renderGlass(beer) {
    if (!beer.ebc) return;

    // let randomGlass = Math.floor(Math.random() * 12) + 1;
    let randomGlass = Math.max(beer.ebc % 12, 1);

    return (
      <div className="glass">
        <img src={`/img/glass-${randomGlass}.jpg`} alt={beer.name} />
        <h3>EBC {beer.ebc} (Glass {randomGlass})</h3>
      </div>
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="app">
          <Header name="Beer App!" />
          <Loader message="Ça charge !" />
        </div>
      );
    }

    let image = this.state.beer.image_url ? this.state.beer.image_url : '/img/glass-6.jpg';

    return (
      <div className="app">
        <Header name="Beer App!" />
        <div className="single">
          <div className="flex">
            <div className="label">
              <img src={image} alt={this.state.beer.name} />
            </div>

            <div className="desc">
              <h2>{this.state.beer.name}</h2>
              <p>{this.state.beer.description}</p>
            </div>
          </div>

          {this.renderAbv(this.state.beer)}

          <div className="deets">
            {/* On peut faire du CSS en objet dans le JSX 🫣 */}
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
