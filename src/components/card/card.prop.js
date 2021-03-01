import PropTypes from 'prop-types';

export default PropTypes.shape({
  'id': PropTypes.number.isRequired,
  'previewImage': PropTypes.string.isRequired,
  'isPremium': PropTypes.bool.isRequired,
  'price': PropTypes.number.isRequired,
  'title': PropTypes.string.isRequired,
  'type': PropTypes.string.isRequired,
  'rating': PropTypes.number.isRequired,
  'isFavorite': PropTypes.bool.isRequired
});
