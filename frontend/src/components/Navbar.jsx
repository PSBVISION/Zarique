import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch, getCartCount} = useContext(ShopContext);
  return (
    <nav className="flex items-center justify-between py-5 font-medium">
      <Link to="/" className="flex items-center  gap-2 text-3xl prata-regular">
      <img src={assets.logo} alt="logo" className="w-8 pb-1" />
      ZariQue
</Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink className="flex flex-col items-center gap-1" to="/">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.6px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/collection">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.6px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/about">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.6px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/contact">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.6px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="serach icon"
          className="w-5 cursor-pointer"
          onClick={()=>setShowSearch(true)}
        />
        <div className="group relative">
          <Link to="/login">
          <img
            src={assets.profile_icon}
            alt="profile "
            className="w-5 cursor-pointer"
            />
            </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className=" flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Log Out</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount(0)}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* mobile menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-y-scroll bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div
          onClick={() => setVisible(false)}
          className="flex flex-col text-gray-600"
        >
          <div className="flex items-center gap-4 p-3">
            <img
              src={assets.dropdown_icon}
              alt="sidebar closer"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>
          <NavLink className="py-2 pl-6 border-b-1" onClick={()=>setVisible(false)} to={'/'}>HOME</NavLink>
          <NavLink className="py-2 pl-6 border-b-1" onClick={()=>setVisible(false)} to={'/collection'}>COLLECTION</NavLink>
          <NavLink className="py-2 pl-6 border-b-1" onClick={()=>setVisible(false)} to={'/about'}>ABOUT</NavLink>
          <NavLink className="py-2 pl-6 border-b-1" onClick={()=>setVisible(false)} to={'/contact'}>CONTACT</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
