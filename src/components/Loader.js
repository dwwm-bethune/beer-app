function Loader(props) {
    return (
        <div className="loader">
            <img src="/img/ball.svg" alt="Chargement..." />
            <h2>{props.message}</h2>
        </div>
    );
}

export default Loader;
