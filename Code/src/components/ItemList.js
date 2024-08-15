// import { useDispatch } from "react-redux";
// import { CDN_URL } from "../utils/constants";
// import { addItem } from "../utils/CartSlice";
// const ItemList = ({ items, showButton = true }) => {
//   console.log(items);

//   const dispatch = useDispatch();

//   // const additems = () => {
//   //   //dispatch an action
//   //   dispatch(addItem("Non Veg Pizza")); //when we pass this insde additem it will go to reducer in cartSlice and that to inside the payload
//   // };
//   // when we click on button action is dispatch and reducer is called additem and bove we're dispatchin an action which update and then we have suscribed
//   // to selector so  it is getting updating on top
//   const additems = (item) => {
//     //here i m passing real data not dummy data like pizza, burger
//     dispatch(addItem(item));
//   };

//   const totalPrice = items.reduce(
//     (total, item) =>
//       total + (item.card.info.price ? item.card.info.price / 100 : 0),
//     0
//   );

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
//             {showButton && (
//               <div className="absolute">
//                 <button
//                   className="p-2 ml-8 mt-[90px] rounded-lg bg-black text-white shadow-lg hover:bg-amber-200  hover:text-black transition-all duration-[.4s]"
//                   onClick={() => additems(item)}
//                 >
//                   Add +
//                 </button>
//               </div>
//             )}
//             <img
//               src={CDN_URL + item.card.info.imageId}
//               alt={item?.card?.info?.name}
//               className="w-full rounded-md"
//             />
//           </div>
//         </div>
//       ))}
//       <div className="text-right font-bold p-4">
//         <span>Total: ₹{totalPrice.toFixed(2)}</span>
//       </div>
//     </div>
//   );
// };
// export default ItemList;
