import React from "react";
import { FaRegBell, FaRegEnvelope } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

function Header() {
  return (
    <header className="bg-gray-800 h-[50px] z-[5] p-3 fixed top-0 mt-0 w-full flex justify-between items-center">
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-900 w-[120px] md:w-[200px] ml-[50px] md:ml-[80px] p-1 text-[10px] md:text-[15px] rounded-md focus:outline-none"
      />
      <div className="hidden md:flex items-center space-x-5">
        <div className="rounded-full text-gray-400 bg-gray-600 p-2">
          <FaRegEnvelope size={20} />
        </div>
        <div className="rounded-full text-gray-400 bg-gray-600 p-2">
          <IoSettingsOutline size={20} />
        </div>
        <div className="relative text-gray-400 bg-gray-600 rounded-full p-2">
          <FaRegBell size={20} />
          <div className="m-2 w-[9px] h-[9px] rounded-full absolute bg-blue-400 top-0 right-0"></div>
        </div>
        <img
          src="https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-man-6-940x940.png"
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
      </div>
      <div className="md:hidden flex items-center space-x-2">
        <div className="rounded-full text-gray-400 bg-gray-600 p-2">
          <FaRegEnvelope size={15} />
        </div>
        <div className="rounded-full text-gray-400 bg-gray-600 p-2">
          <IoSettingsOutline size={15} />
        </div>
        <div className="relative text-gray-400 bg-gray-600 rounded-full p-2">
          <FaRegBell size={15} />
          <div className="m-2 w-[9px] h-[9px] rounded-full absolute bg-blue-400 top-0 right-0"></div>
        </div>
        <img
          src="https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-man-6-940x940.png"
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
      </div>
    </header>
  );
}

export default Header;
