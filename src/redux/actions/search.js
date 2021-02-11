import * as actionTypes from "../actionTypes";

export const saveSearch = (res, data) => {
  return {
    type: actionTypes.ADD_SEARCH,
    result: res,
    searchResults: data,
  };
};

export const addSearch = (res) => {
  return (dispatch) => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${res}`)
      .then((response) => response.json())
      .then((data) => dispatch(saveSearch(res, data.hits)));
  };
};
