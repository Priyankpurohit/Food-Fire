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
      <div>
        <h2>{name.slice(0, 25)}</h2>
        <h3>{cuisines.toSpliced(3).join(", ")}</h3>
        <h3>⭐{avgRatingString} stars</h3>
        <h3>{locality + " , " + areaName}</h3>
      </div>
    </div>
  );
};
export default RestaurantCard;
