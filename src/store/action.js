export const ActionType = {
  CHANGE_LOCATION: `city/changeLocation`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_HOTELS: `data/loadHotels`,
  CHANGE_SORT: `places/changeSort`
};

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
  }),
  setSort(sort) {
    return {type: ActionType.CHANGE_SORT, payload: sort};
  }
};
