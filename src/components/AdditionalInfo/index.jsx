import React from "react";
import { FaHamburger } from "react-icons/fa";
import { GiBowlOfRice } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

const AdditionalInfo = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-md h-full text-white">
      <h3 className="text-lg font-medium mb-4">More Info</h3>
      <ul className="space-y-4">
        <li
          key="goals"
          className="flex justify-between items-center bg-gray-900 p-4 rounded-md">
          <div className="flex items-center gap-2">
            <span className="bg-red-900 rounded-full p-2">
              <GoGoal size={20} className=" text-red-400" />
            </span>
            <span className="text-lg">Goals</span>
          </div>
          <IoIosArrowForward className="w-5 h-5" />
        </li>
        <li
          key="dishes"
          className="flex justify-between items-center bg-gray-900 p-4 rounded-md">
          <div className="flex items-center gap-2">
            <span className="bg-red-900 rounded-full p-2">
              <FaHamburger size={20} className=" text-red-400" />
            </span>{" "}
            <span className="text-lg">Popular Dishes</span>
          </div>
          <IoIosArrowForward className="w-5 h-5" />
        </li>
        <li
          key="menus"
          className="flex justify-between items-center bg-gray-900 p-4 rounded-md">
          <div className="flex items-center gap-2">
            <span className="bg-blue-900 rounded-full p-2">
              <GiBowlOfRice size={20} className=" text-blue-400" />
            </span>{" "}
            <span className="text-lg">Menus</span>
          </div>
          <IoIosArrowForward className="w-5 h-5" />
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInfo;
