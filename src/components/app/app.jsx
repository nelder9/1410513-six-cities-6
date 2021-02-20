import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-page/main';
import LoginScreen from '../login/login';
import FavoritesScreen from '../favorites/favorites';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import OfferScreen from '../offer/offer';

const App = (props) => {
  const {places, totalPlaces} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainScreen
            places={places}
            totalPlaces={totalPlaces}
          />
        </Route>
        <Route path="/login" exact>
          <LoginScreen />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesScreen />
        </Route>
        <Route path="/offer/:id?" exact component={OfferScreen} />
        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  totalPlaces: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        photo: PropTypes.string.isRequired,
      })
  ).isRequired
};

export default App;
