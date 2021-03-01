import React from 'react';
import {connect} from 'react-redux';
import {offersValidation} from '../../const-valid';
import Card from '../card/card';
import PropTypes from 'prop-types';
import Map from '../map/map';

const CitiesList = (props) => {
  const {currentCityPlaces, currentCity} = props;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentCityPlaces.length} {currentCityPlaces.length > 1 ? `places` : `place`} to stay in {currentCity}</b>
          <div className="cities__places-list places__list tabs__content">
            {currentCityPlaces.map((offer) => <Card offer={offer} key={offer[`id`]} />) }
          </div>
        </section>
        <div className="cities__right-section">
          <Map offers={currentCityPlaces}/>
        </div>
      </div>
    </div>
  );
};

CitiesList.propTypes = {
  currentCityPlaces: PropTypes.arrayOf(offersValidation),
  cardId: PropTypes.number,
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = ({location}) => ({
  currentCity: location,
});

export {CitiesList};
export default connect(mapStateToProps)(CitiesList);
