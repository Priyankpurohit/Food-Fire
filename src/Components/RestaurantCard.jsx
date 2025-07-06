import { IMG_URL } from "../constants";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRatingString,
  areaName,
  locality,
}) => {
  return (
    <div className="card">
      <img src={IMG_URL + cloudinaryImageId} alt="restaurant image" />
      <div className="text">
        <h2>{name}</h2>
        <h3>{cuisines?.join(", ")}</h3>
        <h3>⭐{avgRatingString} stars</h3>
        <h3>{locality + " , " + areaName}</h3>
      </div>
    </div>
  );
};
export default RestaurantCard;
