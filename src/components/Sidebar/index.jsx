import React, { useState } from "react";
import {FaClipboardCheck } from "react-icons/fa";
import InsertChartOutlinedOutlinedIcon from "@mui/icons-material/InsertChartOutlinedOutlined";
import HomeIcon from "@mui/icons-material/Home";
import "./index.css";
import { CiWallet } from "react-icons/ci";
import { BsFillBagCheckFill } from "react-icons/bs";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
function Sidebar() {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className="sidebar z-10 w-[50px] md:w-[50px] h-screen mt-0 fixed top-0 bg-gray-800 flex flex-col items-center py-4">
      <div className="text-2xl mb-8 grid grid-cols-2 gap-[1px]">
        <div className="w-[12px] h-[12px] bg-blue-400 grid-icon-1"></div>
        <div className="w-[12px] h-[12px] bg-blue-400 grid-icon-2"></div>
        <div className="w-[12px] h-[12px] bg-blue-400 grid-icon-3"></div>
        <div className="w-[12px] h-[12px] bg-blue-400 grid-icon-4"></div>
      </div>
      <nav className="flex flex-col items-center space-y-6 h-full w-full">
        <div className={`py-2 w-full ${activeTab==="Home"? "border-l-[4px] pl-0":"pl-[4px]"} border-blue-500 flex justify-center`} onClick={()=>setActiveTab("Home")}>
          <HomeIcon size={20} className=" text-gray-400" />
        </div>
        <div className={`py-2 w-full ${activeTab==="Progress" ? "border-l-[4px] pl-0":"pl-[4px]"} border-blue-500 flex justify-center`} onClick={()=>setActiveTab("Progress")}>
          <InsertChartOutlinedOutlinedIcon
            size={25}
            className=" text-gray-400"
          />
        </div>
        <div className={`py-2 w-full ${activeTab==="Note"? "border-l-[4px] pl-0":"pl-[4px]"} border-blue-500 flex justify-center`} onClick={()=>setActiveTab("Note")}>
          <FaClipboardCheck size={20} className="text-xl text-gray-400" />
        </div>
        <div className={`py-2 w-full ${activeTab==="Wallet"? "border-l-[4px] pl-0":"pl-[4px]"} border-blue-500 flex justify-center`} onClick={()=>setActiveTab("Wallet")}>
          <CiWallet size={20} className="text-xl text-gray-400" />
        </div>
        <div className={`py-2 w-full ${activeTab==="Bag"? "border-l-[4px] pl-0":"pl-[4px]"} border-blue-500 flex justify-center`} onClick={()=>setActiveTab("Bag")}>
          <BsFillBagCheckFill size={20} className="text-xl text-gray-400" />
        </div>
        
        <div className="flex flex-col justify-end flex-grow flex-1">
          <LuArrowUpRightFromCircle
            size={20}
            className="text-gray-400 rotate-45 justify-self-end mb-6"
          />
        </div>
       
      </nav>
    </div>
  );
}

export default Sidebar;
