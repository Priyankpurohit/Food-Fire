import { IMG_URL } from "../../constants";
import { useParams } from "react-router-dom";
import useRestaurant from "./utiles/useRestaurant";

import "../../App.css";
import Shimmer from "../Shimmer";
const RestaurantMenu = () => {
  const { Id } = useParams();
  const restaurant = useRestaurant(Id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="Menu">
      <div className="restaurant-details">
        <img
          src={
            IMG_URL + restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId
          }
          alt="restaurant image"
        />
        <div>
          <h1>{restaurant?.cards[2]?.card?.card?.info?.name} </h1>
          <h2>{restaurant?.cards[2]?.card?.card?.info?.areaName}</h2>
          <h2>{restaurant?.cards[2]?.card?.card?.info?.locality}</h2>
          <h2>⭐{restaurant?.cards[2]?.card?.card?.info?.avgRating} Stars</h2>
          <h2>{restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}</h2>
          <h2>
            {restaurant?.cards[2]?.card?.card?.info?.cuisines?.join(", ")}
          </h2>
        </div>
      </div>
      <div className="menulist">
        <h3>
          <ul>
            {Object.values(
              restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                ?.card?.card?.itemCards || {}
            ).map((item) => (
              <li key={item.id}>
                <div className="item-details">
                  <h3>{item?.card?.info?.name.slice(0, 42)}</h3>
                  <h4>Price ₹{item?.card?.info?.price / 100}</h4>
                  <h5>
                    ⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}(
                    {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
                    )
                  </h5>
                  <h5>{item?.card?.info?.description.slice(0, 150)}...</h5>
                </div>
                <img
                  src={IMG_URL + item?.card?.info?.imageId}
                  alt="Item image"
                />
              </li>
            ))}
          </ul>
        </h3>
      </div>
    </div>
  );
};

export default RestaurantMenu;
