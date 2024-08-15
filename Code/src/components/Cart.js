// import React from "react";
// import { useSelector } from "react-redux";
// import ItemList from "./ItemList";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { clearcart } from "../utils/CartSlice";
// const Cart = () => {
//   const cartitems = useSelector((store) => store.cart.items);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const handleClearCart = () => {
//     dispatch(clearcart());
//   };

//   return (
//     <div className="text-center m-4 p-4">
//       <h1 className="text-2xl font-bold">Cart</h1>
//       <div className="w-6/12 m-auto">
//         {cartitems.length > 0 ? (
//           <>
//             <button
//               //   className="p-2 m-2 bg-red-500 hover:bg-red-400 duration-[.3s] text-white rounded-md font-medium"
//               className="p-2 m-3 bg-red-500 hover:bg-red-800 duration-[.3s] rounded-xl text-white font-medium"
//               onClick={handleClearCart}
//             >
//               Clear Cart
//             </button>
//             <ItemList items={cartitems} showButton={false} />
//           </>
//         ) : (
//           <>
//             <div className="flex justify-center items-center">
//               <div className="w-96 h-64 flex justify-center items-center">
//                 <img
//                   src="data:image/jpeg;base64,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"
//                   className="rounded-2xl"
//                 />{" "}
//               </div>
//             </div>

//             <button
//               //   className="p-2 m-2 bg-red-500 hover:bg-red-400 duration-[.3s] text-white rounded-md font-medium"
//               className="p-2 m-3 bg-blue-500 hover:bg-blue-800 duration-[.3s] rounded-xl text-white font-medium"
//               onClick={() => navigate("/")}
//             >
//               Start Adding
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { useSelector } from "react-redux";
import UpdateCartList from "./UpdateCartList";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearcart } from "../utils/CartSlice";
import { EMPTY_CART } from "../utils/constants";

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearcart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartitems.length > 0 ? (
          <>
            <button
              className="p-2 m-3 bg-red-500 hover:bg-red-800 duration-[.3s] rounded-xl text-white font-medium"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <UpdateCartList items={cartitems} />
          </>
        ) : (
          <>
            <div className="flex justify-center items-center">
              <div className="w-96 h-64 flex justify-center items-center">
                <img src={EMPTY_CART} className="rounded-2xl" />
              </div>
            </div>
            <button
              className="p-2 m-3 bg-blue-500 hover:bg-blue-800 duration-[.3s] rounded-xl text-white font-medium"
              onClick={() => navigate("/")}
            >
              Start Adding
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
