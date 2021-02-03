import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-page/main';

const App = (props) => {
  const {places, totalPlaces} = props;
  return (
    <MainScreen
      places = {places}
      totalPlaces = {totalPlaces}
    />
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
