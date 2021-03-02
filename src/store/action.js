export const ActionType = {
  CHANGE_LOCATION: `city/changeLocation`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_HOTELS: `data/loadHotels`,
};

export const setLocation = (location) => ({type: ActionType.CHANGE_LOCATION, payload: location});

export const ActionCreators = {
  setLocation: (location) => ({
    type: ActionType.CHANGE_LOCATION,
    payload: location
  }),
  loadHotels: (data) => ({
    type: ActionType.LOAD_HOTELS,
    payload: data
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  })
};
