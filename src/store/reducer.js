import {CityList} from "../const";
// import {Offers} from "../mocks/mocks";
import {ActionType} from "./action";
import {AuthorizationStatus} from '../const';

const initialState = {
  location: CityList.Paris,
  cities: CityList,
  offers: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
