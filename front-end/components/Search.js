import React, { useState, useRef } from "react";
import styles from "../styles/Search.module.scss";

function Search({ searchTerm, searchKeyword }) {
  const inputEl = useRef("");
  const getSearchTerm = () => {
    searchKeyword(inputEl.current.value);
  };
  return (
    <input
      ref={inputEl}
      type="text"
      className={styles.searchBar}
      placeholder="Rechercher un joueur"
      input="updateInput"
      value={searchTerm}
      onChange={getSearchTerm}
    />
  );
}

export default Search;
