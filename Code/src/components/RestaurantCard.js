import { CDN_URL } from "../utils/constants";
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all ">
      <div>
        <img
          className="w-[250px] h-[150px] rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="Biryani"
        />
      </div>

      <div>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <hr />
        <em>{cuisines.join(", ")}</em>
        <h4 className="avg-rating">
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            {avgRating} <AiOutlineStar />
          </span>
        </h4>
        <h4 className="item-price">
          <span>{costForTwo} </span>
        </h4>
        <h4 className="time">
          <span className="icons"></span>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <FiClock /> {sla?.slaString}{" "}
          </span>
        </h4>
        <h4>User: {loggedInUser}</h4>
      </div>
    </div>
  );
};

// * Higher Order Component

// * input - RestaurantCard => RestaurantCardPromoted

//withPromotedLabel is a higher order component which takes restaurantcard as a input and return a new component with promoted label
//on top of it
//this is enhanced version of rescard which return a label on top of it
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      //this JSX is enhanced component
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
