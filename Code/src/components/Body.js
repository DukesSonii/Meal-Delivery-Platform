import { useEffect, useState, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Spin } from "antd";

import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [rating, setRating] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [loading, setloading] = useState(true);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setloading(true);

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2692&lng=73.009&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredRestaurant(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setloading(false);
  };

  if (loading)
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        <Spin size="large" />
      </div>
    );

  // const onlineStatus = useOnlineStatus();
  // if (onlineStatus === false) {
  //   return <h1 style={{ fontSize: "50px" }}>Looks like you're Offline</h1>;
  // }

  const filterByRating = () => {
    let filterList;
    if (rating === "All") {
      filterList = listOfRestaurants;
    } else {
      filterList = listOfRestaurants.filter(
        (res) => res.info.avgRating === parseFloat(rating)
      );
    }
    setFilteredRestaurant(filterList);
  };

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex flex-col sm:flex-row">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="searchBox border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <select
            id="rating"
            className="border border-black p-2 rounded-lg"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
              filterByRating(); // Call filterByRating after setting rating
            }}
          >
            <option value="All">All Ratings</option>
            <option value="4.6">4.6 Star</option>
            <option value="4.5">4.5 Star</option>
            <option value="4.4">4.4 Star</option>
          </select>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <label htmlFor="name">User Name: </label>
          <input
            id="name"
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-center flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            style={{ color: "black", textDecoration: "none" }}
          >
            {restaurant?.info?.Promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
