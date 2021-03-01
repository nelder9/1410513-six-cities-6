import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import LoginScreen from '../login/login';
import FavoritesScreen from '../favorites/favorites';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import RoomPage from '../room/room-page';
import {offersValidation} from '../../const-valid';

const App = (props) => {
  const {offers} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/login" exact>
          <LoginScreen />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesScreen
            offers={offers}
          />
        </Route>
        <Route exact path="/offer/:id?"
          render={({match}) => <RoomPage offer={offers.find((item) => item.id.toString() === match.params.id)} />} />
        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(offersValidation)
};

export default App;
