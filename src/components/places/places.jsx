import React, {useEffect, useState} from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import CitiesList from '../cities-list/cities-list';
import PropTypes from 'prop-types';
import NoPlaces from '../no-places/no-places';
import LocationList from '../location-list/location-list';
import {getCityFiltredPlaces, getSortedPlaces} from '../../utils';
import {connect} from 'react-redux';
import {ActionCreators} from '../../store/action';
import {offersValidation} from '../../const-valid';
import {fetchHotelsList} from "../../services/api-actions";

const Places = (props) => {

  const {offers, handleCityChange, currentCity, onLoadData, isDataLoaded, sortType} = props;

  const [offerId, setOfferId] = useState(null);


  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const filteredPlacesByCities = getCityFiltredPlaces(offers);

  const currentCityPlaces = getSortedPlaces(filteredPlacesByCities[currentCity], sortType);

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationList onCityClick={handleCityChange}/>
        </section>
      </div>
      {currentCityPlaces.length === 0 ? <NoPlaces /> : <CitiesList currentCityPlaces={currentCityPlaces} onCursorHandle={setOfferId} offerId={offerId}/>}
    </main>
  );
};

const mapStateToProps = ({offers, location, isDataLoaded, sort}) => ({
  offers,
  currentCity: location,
  isDataLoaded,
  sortType: sort
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
  isDataLoaded: PropTypes.bool.isRequired,
  sortType: PropTypes.string.isRequired
};

export {Places};
export default connect(mapStateToProps, mapDispatchToProps)(Places);
