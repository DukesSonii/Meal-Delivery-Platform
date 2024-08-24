import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import {
  Bars3Icon,
  ShoppingCartIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-gray-800 text-white flex items-center justify-between p-4 shadow-md">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3655/3655682.png"
            alt="Logo"
            className="w-12 h-12"
          />
        </Link>
      </div>
      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="flex items-center space-x-1">
          <Bars3Icon className="w-6 h-6" />
          <span>Home</span>
        </Link>
        <Link to="/about" className="flex items-center space-x-1">
          <UserCircleIcon className="w-6 h-6" />
          <span>About Us</span>
        </Link>
        <Link to="/contact" className="flex items-center space-x-1">
          <UserCircleIcon className="w-6 h-6" />
          <span>Contact Us</span>
        </Link>
        <Link to="/grocery" className="flex items-center space-x-1">
          <UserCircleIcon className="w-6 h-6" />
          <span>Grocery</span>
        </Link>
        <Link to="/cart" className="flex items-center space-x-1">
          <ShoppingCartIcon className="w-6 h-6" />
          <span>Cart ({cartItems.length})</span>
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <button
          className="bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
          onClick={() =>
            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
          }
        >
          {btnNameReact}
        </button>
        <span>{loggedInUser}</span>
        <div className="md:hidden">
          <button className="text-white">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
