import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Activity = () => {
  const chartRef = useRef(null);

  const data = {
    labels: [
      2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 23, 25, 27,
      29, 31, 33,
    ],
    datasets: [
      {
        label: "Activity",
        data: [
          10000, 12000, 16000, 14000, 15000, 18000, 10000, 5000, 17000, 7000,
          9000, 4000, 12000, 8000, 6000, 11000, 13000, 15000, 4000, 12000, 19000,
          17000, 8000,
        ],
        backgroundColor: "#229BD8",
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 1,
        borderRadius: 20,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded-md h-80">
      <div className="flex justify-between w-full">
        <h3 className="text-lg font-medium mb-4 text-white">Activity</h3>
        <select className="h-[30px] w-[100px] bg-black rounded-3xl px-2 text-gray-400">
          <option
            value="weekly"
            key="weekly"
            className="border-0 rounded-3xl bg-black">
            weekly
          </option>
          <option value="monthly" key="monthly">
            Monthly
          </option>
          <option value="yearly" key="yearly">
            Yearly
          </option>
        </select>
      </div>

      <Bar ref={chartRef} data={data} options={options} className="pb-[50px]" />
    </div>
  );
};

export default Activity;
