// import React from "react";
// import { useDispatch } from "react-redux";
// import { CDN_URL } from "../utils/constants";
// import { addItem } from "../utils/CartSlice";

// const AddItemList = ({ items }) => {
//   const dispatch = useDispatch();

//   const handleAddItem = (item) => {
//     dispatch(addItem(item));
//   };

//   return (
//     <div className="p-2 m-2 text-left justify-between">
//       {items.map((item) => (
//         <div
//           key={item.card.info.id}
//           className="flex justify-between items-center border-b-2"
//         >
//           <div className="w-9/12">
//             <div className="py-2">
//               <span>{item.card.info.name}</span>
//               <span>
//                 -₹
//                 {item.card.info.price
//                   ? item.card.info.price / 100
//                   : item.card.info.price}
//               </span>
//             </div>
//             <p className="text-xs">{item?.card?.info?.description}</p>
//           </div>
//           <div className="w-3/12 p-4">
//             <button
//               className="p-2 ml-8 mt-[90px] rounded-lg bg-black text-white shadow-lg hover:bg-amber-200 hover:text-black transition-all duration-[.4s]"
//               onClick={() => handleAddItem(item)}
//             >
//               Add +
//             </button>
//             <img
//               src={CDN_URL + item.card.info.imageId}
//               alt={item?.card?.info?.name}
//               className="w-full rounded-md"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AddItemList;

import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/CartSlice";
const AddItemList = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  const additems = (item) => {
    //here i m passing real data not dummy data like pizza, burger
    dispatch(addItem(item));
  };

  return (
    <div className="p-2 m-2 text-left justify-between">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-center border-b-2"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                -₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.price}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 ml-8 mt-[90px] rounded-lg bg-black text-white shadow-lg hover:bg-amber-200  hover:text-black transition-all duration-[.4s]"
                onClick={() => additems(item)}
              >
                Add +
              </button>
            </div>

            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item?.card?.info?.name}
              className="w-full rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default AddItemList;
