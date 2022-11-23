import * as React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/about';
import HomePage from '../pages/home';
import NeuralNetworksPage from '../pages/neural-networks';
import SearchPage from '../pages/search';
import './navbar-styles.scss';

function ApplicationRouter() {
  return (
    <div className="router-wrapper">
      <div className="navbar-wrapper">
        <BrowserRouter>
          <div className="navbar-links">
            <Link className="router-link" to="/">
              Home
            </Link>
            <Link className="router-link" to="/neural-networks">
              Neural Networks
            </Link>
            <Link className="router-link" to="/search">
              Explore
            </Link>
            <Link className="router-link" to="/about">
              About
            </Link>
          </div>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route
              path="/neural-networks"
              element={<NeuralNetworksPage />}
            ></Route>
            <Route path="/search" element={<SearchPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default ApplicationRouter;