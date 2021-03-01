import React, {useState} from 'react';
import CitiesList from '../cities-list/cities-list';
import PropTypes from 'prop-types';
import LocationList from '../location-list/location-list';
// import {getCityFiltredPlaces, getSortedPlaces} from '../../utils';
import {connect} from 'react-redux';
import {ActionCreators} from '../../store/action';

const Places = (props) => {
  console.log(props, 1);
  const {cards, handleCityChange, currentCity, sortType} = props;
  const [cardId, setCardId] = useState(null);

  // const filteredPlacesByCities = getCityFiltredPlaces(cards);

  //const currentCityPlaces = getSortedPlaces(filteredPlacesByCities[currentCity], sortType);

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationList onCityClick={handleCityChange}/>
          <CitiesList onCursorHandle={setCardId} cardId={cardId} />
        </section>
      </div>
    </main>
  );
};

const mapStateToProps = ({cards, location, sort}) => ({
  cards,
  currentCity: location,
  sortType: sort
});

const mapDispatchToProps = (dispatch) => ({
  handleCityChange(evt) {
    const location = evt.target.innerText;
    dispatch(ActionCreators.setLocation(location));
  }
});

export {Places};
export default connect(mapStateToProps, mapDispatchToProps)(Places);
