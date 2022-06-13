function App() {
  return (
    <div className="app">
      <h1 className="header">Beer App!</h1>
      <div className="search">
        <input type="text" placeholder="Hoppy, Malt, Angry, New..." />
        <button disabled>Recherche</button>
      </div>
      <div className="results">
        <div className="beer">
          <h2>Bière 1</h2>
          <img src="logo192.png" alt="Bière 1" />
        </div>
        <div className="beer">
          <h2>Bière 2</h2>
          <img src="logo192.png" alt="Bière 2" />
        </div>
        <div className="beer">
          <h2>Bière 3</h2>
          <img src="logo192.png" alt="Bière 3" />
        </div>
        <div className="beer">
          <h2>Bière 4</h2>
          <img src="logo192.png" alt="Bière 4" />
        </div>
      </div>
    </div>
  );
}

export default App;
