import React from 'react';
import PropTypes from 'prop-types';
import {offersValidation} from '../../const-valid';
import Card from '../card/card';

const OffersList = ({offers}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => <Card offers={item} key={item.id} />)}
    </div>);
};


OffersList.propTypes = {
  offers: PropTypes.arrayOf(offersValidation)
};

export default OffersList;
