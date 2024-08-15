// // import React, { useState } from "react";
// // import ItemList from "./ItemList";

// // const RestaurantCategory = ({ data, showAccordian, setShowIndex }) => {
// //   const handleClick = () => {
// //     setShowIndex();
// //   };
// //   const bomb = data?.itemCards.map((carot) => carot.card);
// //   console.log("dzvfvbf", bomb);

// //   return (
// //     <div className="w-[700px] mx-auto p-8 mb-1 bg-gray-50 shadow-xl my-4">
// //       <div className="flex justify-between ">
// //         <span>
// //           {data.title} ({data.itemCards.length})
// //         </span>
// //         <span className="text-3xl mr-7 cursor-pointer" onClick={handleClick}>
// //           ⬇️
// //         </span>
// //       </div>
// //       {/* itemlist will only be shown if showAccordian is true */}
// //       {showAccordian && <ItemList items={bomb} />}
// //     </div>
// //   );
// // };

// // export default RestaurantCategory;

// import React from "react";
// import ItemList from "./ItemList";

// const RestaurantCategory = ({
//   data,
//   showItems,
//   toggleCategory,
//   dummy,
//   setShowIndex,
// }) => {
//   const handleClick = () => {
//     setShowIndex();
//   };
//   return (
//     <div>
//       <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-xl p-4">
//         <div
//           className="flex justify-between cursor-pointer"
//           onClick={handleClick}
//         >
//           <span className="font-bold text-lg">
//             {data.title} ({data.itemCards.length})
//           </span>
//           <span>{showItems ? "🔼" : "🔽"}</span>
//         </div>
//         {showItems && (
//           <ItemList items={data.itemCards} dummy={dummy} showButton={true} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default RestaurantCategory;

import React from "react";
import AddItemList from "./AddItemList";

const RestaurantCategory = ({
  data,
  showItems,
  toggleCategory,
  setShowIndex,
}) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-xl p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "🔼" : "🔽"}</span>
        </div>
        {showItems && <AddItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
