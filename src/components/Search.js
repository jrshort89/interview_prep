import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions/search";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const searchHistory = useSelector((state) => state.searchHistory);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(actions.addSearch(searchText));
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={(event) => onSubmitHandler(event)}>
        <input
          type="text"
          name="searchText"
          onChange={(event) => setSearchText(event.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      {searchHistory?.map((search, index) => (
        <div key={index + 1}>{search}</div>
      ))}
    </div>
  );
}
