import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
// if function name starting from name "use" react understand it is hook

// Job of useRestaurantMenu is to take the resID and return the restaurant Information (resInfo)
const useRestaurantMenu = (resId) => {
  // fetch data
  // this resInfo coming from useState and default value is null. initialyy there is no restaurant
  //   1. Creating the state varaible
  const [resInfo, setResInfo] = useState(null);
  // we have to dfecth the data as like how we fetch the data from the component. like inside our useeffect
  //  2. Fetching the data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // 3. We have to update the resInfo using setResInfo
    setResInfo(json.data);
  };
  return resInfo; // resInfo is local variable for this hook
};
export default useRestaurantMenu;
