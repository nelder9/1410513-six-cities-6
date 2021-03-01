import {CityList} from "../const";
import {Offers} from "../mocks/mocks";
import {ActionType} from "./action";

const initialState = {
  location: CityList.Paris,
  cities: CityList,
  sort: `Popular`,
  cards: Offers,
  isLogged: false
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    default:
      return state;
  }
};

export {reducer};
