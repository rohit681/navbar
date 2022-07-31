/** @format */

import React, { useState } from "react";
import "../Styles/search.css"

function Search() {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);
  const [defNoun, setdefNoun] = useState("");
  const [defVerb, setdefVerb] = useState("");
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const getTextFromSearch = (e) => {
    setSearched(false);
    setSearch(e);
  };

  const startSearch = async (e) => {
    e.preventDefault();
    setSearched(true);
    const data = await fetch(`${url}${search}`);
    const parsedData = await data.json();
    console.log(parsedData);
    setdefNoun(parsedData[0].meanings[0].definitions[0].definition);
    setdefVerb(parsedData[0].meanings[1].definitions[0].definition);
  };

  return (
    <div style={{ height: "20vh" }}>
      <form
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
        className="searchInput"
          placeholder="search"
          type="text"
          name="fname"
          required
          value={search}
          onChange={(e) => getTextFromSearch(e.target.value)}
        />
        <button
          style={{ border: "none", width: "300px", height: "30px" }}
          name="Search"
          onClick={(e) => startSearch(e)}
        >
          search
        </button>
      </form>
      <div style={{ height: "70vh" }}>
        {searched && search && (
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              marginLeft:"42%"
            }}
          >
            <h1 style={{margin:"0.2%"}}>{search}</h1>
            <div style={{margin:"0.2%"}}>
              Noun: <strong>{defNoun}</strong>
            </div>
            <div style={{margin:"0.2%"}}>
              Verb: <strong>{defVerb}</strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
