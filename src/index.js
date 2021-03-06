import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import './index.css';
import App from './App';
import Single from './components/Single';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recherche/:search" element={<App />} />
        <Route path="/beer/:id/:name" element={<Single />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export function withRouter(Component) {
  return (props) => {
    let params = useParams();
    let navigate = useNavigate();

    return <Component {...props} router={{ params, navigate }} />
  };
}
