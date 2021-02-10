import * as actionTypes from "../actionTypes";

export const addSearch = (searchText) => {
  return {
    type: actionTypes.ADD_SEARCH,
    searchText: searchText,
  };
};
