import { useState, useEffect } from "react";
import { FOODFIRE_MENU_API_URL } from "../../../constants";
const useRestaurant = (Id) => {
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
  return restaurant;
};

export default useRestaurant;
