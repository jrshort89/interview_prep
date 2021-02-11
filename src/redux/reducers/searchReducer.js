import * as actionTypes from "../actionTypes";

const initialState = {
  searchHistory: [],
  currentSearch: [],
};

const searchReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.ADD_SEARCH:
      return {
        searchHistory: [...state.searchHistory, action.searchText],
        currentSearch: action.searchResults,
      };
    default:
      return state;
  }
};

export default searchReducer;
