// import { useState } from "react";
// import { useParams } from "react-router-dom";
// // import Shimmer from './Shimmer';
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import ShimmerMenu from "./ShimmerMenu";
// import RestaurantCategory from "./RestaurantCategory";

// const RestaurantMenu = () => {
//   const { resId } = useParams();

//   const dummy = "Dummy Data";

//   const resInfo = useRestaurantMenu(resId);

//   // const [showIndex, setShowIndex] = useState(0);
//   //so in this initially 0 idx will be visible but if we want nothing should be visible initially so write null
//   const [showIndex, setShowIndex] = useState(null);

//   if (resInfo === null) return <ShimmerMenu />;

//   const {
//     name,
//     cuisines,
//     costForTwoMessage,
//     cloudinaryImageId,
//     avgRating,
//     deliveryTime,
//   } = resInfo?.cards[2]?.card?.card?.info;

//   const { itemCards } = {
//     itemCards:
//       resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
//         ?.card?.itemCards,
//   };
//   const categories =
//     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//       (c) =>
//         c?.card?.card?.["@type"] ==
//         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     );
//   // console.log("asasdsf", categories);
//   return (
//     <div className="text-center">
//       <h1 className="font-bold my-6 text-2xl">{name}</h1>
//       <p className="font-bold text-lg">
//         {cuisines.join(", ")} - {costForTwoMessage}
//       </p>
//       {/* categories accordions */}
//       {categories?.map((category, idx) => (
//         // Controlled Component
//         <RestaurantCategory
//           data={category?.card?.card}
//           key={category?.card?.card?.title}
//           showAccordian={idx == showIndex ? true : false}
//           // if i change showidx it will automatically close and open and parent can control
//           setShowIndex={() => setShowIndex(idx)}
//         />
//       ))}
//     </div>
//   );
// };

// export default RestaurantMenu;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerMenu from "./ShimmerMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const dummy = "Dummy Data";
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(4);
  if (!resInfo) return <ShimmerMenu />;

  const { name, cuisines, costForTwoMessage } =
    resInfo.cards[2]?.card.card.info;

  const categories =
    resInfo.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-bold-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index == showIndex ? true : false} // showidx is variable defined in usestate above initiially showidx is 0
          setShowIndex={() => setShowIndex(showIndex === index ? null : index)} //hame rescategory se setshowidx ko change krna h

          //Now showidx is defined here, now i want to modify in child(rescategory)
          //so can i modify showidx from rescategory? indirectly we can do using setShowIndex so pass setShowIndex to children line 100 which will
          //set the showidx of particular idx and then pass it in rescategory

          // toggleCategory={() =>
          //   setShowIndex(showIndex === index ? null : index)
          // }
          // setShowIndex={() => setShowIndex(index)}
          // dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
