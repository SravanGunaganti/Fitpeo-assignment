import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import ProgressCircle from "../ProgessCircle";
import { FaBasketShopping, FaHandHoldingDollar } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function Metrics() {
  return (
    <div className="relative grid grid-cols-2 h-fit md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      <div className="bg-gray-800 p-4 rounded-md col-span-1 grid grid-rows-2">
        <div className="space-y-1">
          <div className="relative bg-blue-900 rounded-xl p-2 w-fit">
            <FaBasketShopping size={20} className="text-blue-600" />
            <div className="w-fit m-0 p-0 rounded-full">
              <FiPlus
                size={10}

                className="text-white absolute border-0 bottom-2 right-2 p-0 m-0 rounded-full bg-blue-400"
              />
            </div>
          </div>
          <h3 className="text-[12px] font-medium">Total Orders</h3>
        </div>

        <div className="flex justify-between items-center">
          <p className="md:text-3xl text-xl font-bold mt-2 self-end">75</p>
          <p className="text-green-500 mt-1 self-end">▲ 3%</p>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-md col-span-1 grid grid-rows-2">
        <div className="space-y-1">
          <div className="relative bg-green-900 rounded-xl p-2 w-fit">
            <GiShoppingBag size={20} className="text-green-500" />
            <div className="bg-green-400 absolute rounded-full right-2 bottom-2 text-[8px] flex justify-center items-center leading-0">
              &#x2705;
            </div>
          </div>
          <h3 className="text-[12px] font-medium">Total Delivered</h3>
        </div>
        <div className="flex justify-between items-center">
          <p className="md:text-3xl text-xl font-bold mt-2 self-end">70</p>
          <p className="text-red-500 mt-1 self-end">▼ 3%</p>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-md col-span-1 grid grid-rows-2">
        <div className="space-y-1">
          <div className="relative bg-red-900 rounded-xl p-2 w-fit">
            <GiShoppingBag size={20} className="text-red-600" />
            <div className="absolute rounded-full right-2 bottom-2 flex justify-center items-center leading-0">
              <IoClose
                size={12}
                className="text-white bg-red-400 rounded-full p-0"
              />
            </div>
          </div>
          <h3 className="text-[12px] font-medium">Total Cancelled</h3>
        </div>

        <div className="flex justify-between items-center">
          <p className="md:text-3xl text-xl font-bold mt-2 self-end">5</p>
          <p className="text-green-500 mt-1 self-end">▲ 3%</p>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-md col-span-1 grid grid-rows-2">
        <div className="space-y-1">
          <div className="relative bg-pink-800 rounded-xl p-2 w-fit">
            <FaHandHoldingDollar size={20} className="text-pink-400" />
          </div>
          <h3 className="text-[12px] font-medium">Total Revenue</h3>
        </div>

        <div className="flex justify-between items-center">
          <p className="md:text-3xl text-xl font-bold self-end">$12k</p>
          <p className="text-red-500 self-end">▼ 3%</p>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-md flex justify-between col-span-2">
        <div className="h-full grid grid-rows-3">
          <h3 className="text-[12px] font-medium">Net Profit</h3>
          <p className="md:text-3xl text-xl font-bold">$6759.25</p>
          <div className="h-full flex flex-col justify-end">
            <p className="text-green-500">▲ 3%</p>
          </div>
        </div>
        <div>
          <ProgressCircle />
          <p className="text-[10px]">The values here are rounded off</p>
        </div>
      </div>
    </div>
  );
}

export default Metrics;
