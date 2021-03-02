import React, {useEffect} from 'react';
import CitiesList from '../cities-list/cities-list';
import PropTypes from 'prop-types';
import NoPlaces from '../no-places/no-places';
import LocationList from '../location-list/location-list';
import {getCityFiltredPlaces} from '../../utils';
import {connect} from 'react-redux';
import {ActionCreators} from '../../store/action';
import {offersValidation} from '../../const-valid';
import {fetchHotelsList} from "../../services/api-actions";

const Places = (props) => {
  const {offers, handleCityChange, currentCity, onLoadData, isDataLoaded} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);


  const filteredPlacesByCities = getCityFiltredPlaces(offers);

  const currentCityPlaces = filteredPlacesByCities[currentCity];

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationList onCityClick={handleCityChange}/>
        </section>
      </div>
      {currentCityPlaces.length === 0 ? <NoPlaces /> : <CitiesList currentCityPlaces={currentCityPlaces} />}
    </main>
  );
};

const mapStateToProps = ({offers, location, isDataLoaded}) => ({
  offers,
  currentCity: location,
  isDataLoaded
});

const mapDispatchToProps = (dispatch) => ({
  handleCityChange(evt) {
    const location = evt.target.innerText;
    dispatch(ActionCreators.setLocation(location));
  },
  onLoadData() {
    dispatch(fetchHotelsList());
  }
});

Places.propTypes = {
  offers: PropTypes.arrayOf(offersValidation),
  handleCityChange: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  onLoadData: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired
};

export {Places};
export default connect(mapStateToProps, mapDispatchToProps)(Places);
