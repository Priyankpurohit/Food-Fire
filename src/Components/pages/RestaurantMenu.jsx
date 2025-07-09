import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FOODFIRE_MENU_API_URL, IMG_URL } from "../../constants";
import "../../App.css";
import Shimmer from "../Shimmer";
const RestaurantMenu = () => {
  const { Id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FOODFIRE_MENU_API_URL + Id);
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="Menu">
      <div className="restaurant-details">
        <h1>{restaurant?.cards[2]?.card?.card?.info?.name}</h1>
        <img
          src={
            IMG_URL + restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId
          }
          alt="restaurant image"
        />
        <h2>{restaurant?.cards[2]?.card?.card?.info?.areaName}</h2>
        <h2>{restaurant?.cards[2]?.card?.card?.info?.locality}</h2>
        <h2>⭐{restaurant?.cards[2]?.card?.card?.info?.avgRating} Stars</h2>
        <h2>{restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}</h2>
        <h2>{restaurant?.cards[2]?.card?.card?.info?.cuisines?.join(", ")}</h2>
      </div>
      <div className="menulist">
        <h1>Menu</h1>
        <h3>
          <ul>
            {Object.values(
              restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
                ?.card?.card?.itemCards
            ).map((item) => (
              <li key={item.id}>{item?.card?.info?.name}</li>
            ))}
          </ul>
        </h3>
      </div>
    </div>
  );
};

export default RestaurantMenu;
