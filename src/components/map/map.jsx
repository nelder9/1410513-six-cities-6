import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import {offersValidation} from '../../const-valid';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {CitiesInfo} from '../../const.js';
import "leaflet/dist/leaflet.css";
import {getCityFiltredPlaces} from '../../utils.js';

const Map = (props) => {
  const {city, offers} = props;
  const mapRef = useRef();

  const currentOffers = getCityFiltredPlaces(offers)[city];

  useEffect(() => {

    const cityCoords = CitiesInfo[city].coords;
    const cityZoom = CitiesInfo[city].zoom;

    mapRef.current = leaflet.map(`map`, {
      center: cityCoords,
      zoom: cityZoom,
      zoomControl: false,
      marker: true,
    });

    mapRef.current.setView(cityCoords, cityZoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    currentOffers.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: `./img/pin.svg`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: point.location.latitude,
        lng: point.location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(point.title);
    });

    return () => {
      mapRef.current.remove();
    };
  }, [city]);

  return (<section className="property__map map" id="map" ref={mapRef}></section>);
};

const mapStateToProps = ({location, offers}) => ({
  city: location,
  offers
});

Map.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offersValidation)
};

export {Map};

export default connect(mapStateToProps)(Map);
