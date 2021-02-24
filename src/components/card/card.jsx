import React from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {offersValidation} from '../../const-valid';

const Card = (props) => {

  const {offers} = props;

  const {id, previewImage, title} = offers;

  const history = useHistory();

  const onCardClickHandler = (evt) => {
    evt.preventDefault();
    history.push(`/offer/${id}`);
  };

  return (
    <article className="cities__place-card place-card" onClick={onCardClickHandler}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offers.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offers: PropTypes.shape(offersValidation)
};


export default Card;
