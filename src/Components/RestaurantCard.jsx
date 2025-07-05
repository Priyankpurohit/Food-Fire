import { IMG_URL } from "../constants";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRatingString,
  areaName,
}) => {
  return (
    <div className="card">
      <img src={IMG_URL + cloudinaryImageId} alt="restaurant image" />
      <h2>{name}</h2>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{areaName} , Surat</h4>
    </div>
  );
};
export default RestaurantCard;
