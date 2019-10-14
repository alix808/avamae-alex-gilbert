import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBanner } from './actions/userActions';

import Header from './comps/header/Header';
import Spinner from './comps/spinner/Spinner';
import HomePage from './pages/home-page/HomePage';
import ContactPage from './pages/contact-page/ContactPage';
import AboutPage from './pages/about-page/AboutPage';
import Footer from './comps/footer/Footer';

import './App.css';

function App({ getBanner }) {
  useEffect(() => {
    getBanner();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header />
      <Spinner />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/about' component={AboutPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default connect(
  null,
  { getBanner }
)(App);
