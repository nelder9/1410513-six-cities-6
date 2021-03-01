import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import {offersValidation} from '../../const-valid';
import PropTypes from 'prop-types';

import "leaflet/dist/leaflet.css";

const Map = ({offers}) => {

  const mapRef = useRef();
  useEffect(() => {
    const cityCoords = [52.38333, 4.9];
    const cityZoom = 12;

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

    offers.forEach((point) => {
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

      return () => {
        mapRef.current.remove();
      };
    });
  }, []);

  return (<section className="property__map map" id="map" ref={mapRef}></section>);
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offersValidation)
};

export default Map;
