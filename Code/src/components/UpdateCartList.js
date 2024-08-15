import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/CartModify";

const UpdateCartList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartmod.items);

  // Handle adding item
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  // Handle removing item
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item.card.info.id));
  };

  // Calculate total price
  const totalPrice = items.reduce(
    (total, item) =>
      total + (item.card.info.price ? item.card.info.price / 100 : 0),
    0
  );

  // Debugging logs
  console.log("Current items from Redux store:", items);
  console.log("Total Price:", totalPrice);

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
            <div className="flex items-center">
              <button
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-all duration-[.4s]"
                onClick={() => handleRemoveItem(item)}
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-all duration-[.4s]"
                onClick={() => handleAddItem(item)}
              >
                +
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
      <div className="text-right font-bold p-4">
        <span>Total: ₹{totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default UpdateCartList;
