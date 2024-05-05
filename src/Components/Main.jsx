import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../CSS/Main.css";

export default function Main() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
        );
        const indiaData = response.data.filter(
          (city) => city.country.toLowerCase() === "india"
        );
        setSearchResults(indiaData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function handleInputChange(value) {
    setInput(value);
    setSelectedCity("");
  }

  function handleCityClick(city) {
    setInput(city);
    setSelectedCity(city);
    setSearchResults([]);
  }

  return (
    <main className="main-section">
      <h1 className="main-section--heading">Welcome to My PG!</h1>
      <p className="main-section--heading-description">
        Discover Comfortable Living: Your Perfect PG Solution!
      </p>

      <div className="main-section-search-bar">
        <div className="search--bar section-m">
          <div className="search-bar-input">
            <input
              type="text"
              placeholder="Search PG Location"
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
        </div>
        <button className="search-bar-btn section-m">
          <Link className="link-item" to="/mainPgFrame">
            <div className="search-bar-svg">
              <svg x="0px" y="0px" viewBox="0 0 30 30">
                <path
                  d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
                ></path>
              </svg>
            </div>
            <div className="search-text">Search</div>
          </Link>
        </button>
      </div>

      {input.length > 0 && searchResults.length > 0 && !selectedCity && (
        <div className="search-results">
          <ul>
            {searchResults
              .filter((city) =>
                city.name.toLowerCase().includes(input.toLowerCase())
              )
              .map((city, index) => (
                <li key={index} onClick={() => handleCityClick(city.name)}>
                  {city.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </main>
  );
}
