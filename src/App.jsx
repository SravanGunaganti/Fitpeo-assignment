import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="flex h-fit max-w-screen m-0 bg-gray-900 text-white overflow-x-hidden">
      <Sidebar />
      <Header />
      <div className="relative overflow-hidden flex bg-black flex-col min-h-[100vh] pl-[60px] md:pl-[100px] pt-[60px] md:pt-[100px] pb-[50px] pr-[10px] md:pr-[50px] w-full" style={{maxWidth:"100%"}}>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
