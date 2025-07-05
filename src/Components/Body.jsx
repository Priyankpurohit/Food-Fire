import { useState } from "react";
import "../App.css";
import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../constants";

function filterdata(searchText, restaurants) {
  const filterdata = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
  return filterdata;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(RestaurantList);

  return (
    <>
      <div className="search-container">
        <input
          value={searchText}
          type="text"
          className="search-input"
          placeholder="search"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterdata(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          search
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info?.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
