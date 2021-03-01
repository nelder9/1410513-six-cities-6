import React from 'react';
import {connect} from 'react-redux';
import CitiesCard from '../cities-card/cities-card';
import PropTypes from 'prop-types';
import Map from '../map/map';

const CitiesList = (props) => {
  const {currentCityPlaces, onCursorHandle, cardId, currentCity} = props;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found"></b>
          <div className="cities__places-list places__list tabs__content">
          </div>
        </section>
        <div className="cities__right-section">
          <Map points={currentCityPlaces} cardId={cardId}/>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = ({location}) => ({
  currentCity: location,
});

export {CitiesList};
export default connect(mapStateToProps)(CitiesList);
