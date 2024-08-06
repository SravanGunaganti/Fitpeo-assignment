import React from "react";

function RecentOrders() {
  const orders = [
    {
      customer: "Wade Warren",
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      customer: "Jane Cooper",
      orderNo: "48967586",
      amount: "$305.02",
      status: "Delivered",
    },
    {
      customer: "Guy Hawkins",
      orderNo: "78958215",
      amount: "$45.88",
      status: "Cancelled",
    },
    {
      customer: "Kristin Watson",
      orderNo: "20965732",
      amount: "$65.00",
      status: "Pending",
    },
    {
      customer: "Cody Fisher",
      orderNo: "95715620",
      amount: "$545.00",
      status: "Delivered",
    },
    {
      customer: "Savannah Nguyen",
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
    },
  ];

  return (
    <div className="min-w-[600px] w-full md:w-full bg-gray-800 p-6 rounded-md h-full max-h-full m-0 flex-1">
      <div className="grid grid-cols-4 py-2">
        <h3 className="text-lg font-medium col-span-4 col-start-1">
          Recent Orders
        </h3>
      </div>
      <div className="w-full h-full">
        <ul className="list-none p-0 flex flex-col space-y-2">
          <li key="list1-1"
              className="font-semibold grid grid-cols-5 gap-3">
            <p className="col-span-2 py-2">Customer</p>
            <p className="py-2">Order No</p>
            <p className="py-2">Amount</p>
            <p className="py-2">Status</p>
          </li>
          {orders.map((order, index) => (
            <li
              key={index}
              className="border-t border-gray-700 grid grid-cols-5 gap-3">
              <div className="flex space-x-2 col-span-2 justify-start items-center">
                <img
                  src="https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-man-6-940x940.png"
                  alt="Profile"
                  className="rounded-full w-10 h-10"
                />
                <p className=" ">{order.customer}</p>
              </div>
              <p className="py-2 ">{order.orderNo}</p>
              <p className="py-2 ">{order.amount}</p>
              <div className="flex justify-start items-center">
                <p
                  className={`w-[100px] justify-center text-center items-center h-fit rounded-full ${
                    order.status === "Cancelled" || order.status === "Pending"
                      ? "bg-opancity-5 text-red-400 bg-red-900 rounded-3xl"
                      : "rounded-3xl text-green-300 bg-green-900"
                  }`}>
                  {order.status}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecentOrders;
