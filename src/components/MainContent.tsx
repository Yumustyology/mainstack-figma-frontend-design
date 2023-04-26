import React, { useState } from "react";
import "../App.css";
import GraphChart from "./GraphChart";
import Modal from "./Modal";
import { customDateRange, filterViewsData, formatText } from "../utils/utils";
import { FilterButtonProps } from "../interface/interface";
import DoughnutChart from "./DoughnutChart";

const views = {
  "2022-07-31": 1,
  "2022-08-01": 3,
  "2022-08-02": 3,
  "2022-08-03": 7,
  "2022-08-04": 8,
  "2022-08-05": 5,
  "2022-08-06": 20,
  "2022-08-07": 50,
  "2022-08-08": 100,
  "2022-08-09": 2,
};

const top_locations = [
  {
    country: "Nigeria",
    count: 68,
    percent: 34,
  },
  {
    country: "Germany",
    count: 37,
    percent: 19,
  },
  {
    country: "Ghana",
    count: 50,
    percent: 25,
  },
  {
    country: "Finland",
    count: 40,
    percent: 20,
  },
  {
    country: "United Kingdom",
    count: 4,
    percent: 2,
  },
];


type Props = {
  appData: any;
}

const MainContent: React.FC<Props> = ({ appData }) => {
  const [activeBtn, setActiveBtn] = useState("all_time");
  const [startDate, setStartDate] = useState<string>(""); // Date format: "YYYY-MM-DD"
  const [endDate, setEndDate] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
let {views} = appData?.graph_data
  const FilterButton: React.FC<FilterButtonProps> = ({
    text,
    isActive,
    onClick,
  }: FilterButtonProps) => (
    <button
      onClick={onClick}
      className={`filter-button__btn ${isActive && "active-btn"}`}
    >
      {text}
    </button>
  );

  // Filter the views data based on the selected filter
  const filteredViews = () => {
    switch (activeBtn) {
      case "1_day":
        return filterViewsData(views, 1);
      case "3_days":
        return filterViewsData(views, 3);
      case "7_days":
        return filterViewsData(views, 7);
      case "30_days":
        return filterViewsData(views, 30);
      case "all_times":
        return views;
      case "custom_date":
        return filterViewsData(views, customDateRange(startDate, endDate));
      default:
        return views;
    }
  };

  // Handle the start date change
  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartDate(event.target.value);
  };

  // Handle the end date change
  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const chartData = {
    series: [
      {
        name: "Views",
        data: Object.values(filteredViews()),
        color: "#FF5403", // set stroke color to red
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
      },
      xaxis: {
        categories: Object.keys(filteredViews()),
      },
      stroke: {
        width: 2,
        curve: "straight",
      },
      fill: {
        type: "gradient",
        colors: ["#F44336", "#E91E63", "#FF5403"],
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
      title: {
        text: "Page Views",
        align: "left",
        style: {
          fontSize: "18px",
          color:"#131316",
          fontFamily:"sohne",
          fontWeight: "bold",
        },
      },
      subtitle: {
        text: formatText(activeBtn),
        align: "left",
        style: {
          fontSize: "14px",
          color:"#31373D",
          fontFamily:"sohne",
          fontWeight: "normal",
        },
      },
    },
  };
  
  

  // modal open and close functionality
  const onCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="main-content w-[75%] flex justify-end overflow-x-auto">
      <div className="w-[95%]">
        <header className="flex items-start flex-col">
          <p className="dashboard-txt flex flex-col text-bold justify-center items-center h-[68px] text-[#131316] text-[20px] leading-[24px]">
            Dashboard
          </p>
          <div className="w-[95%] flex justify-between items-center">
            <div className="flex flex-col  h-[64px]">
              <p className=" text-[24px] -mb-2">Good morning, Blessing ⛅️</p>
              <p className="text-[14px] text-[#31373D]">
                Check out your dashboard summary.
              </p>
            </div>
            <span className="text-[#FF5403] text-[14px] leading-[22px]">
              View analytics
            </span>
          </div>
        </header>
        {/* graph filter buttons */}
        <div className="filter-buttons mt-4 mb-5 ">
          <FilterButton
            text="1 Day"
            isActive={activeBtn === "1_day"}
            onClick={() => setActiveBtn("1_day")}
          />
          <FilterButton
            text="7 Days"
            isActive={activeBtn === "7_days"}
            onClick={() => setActiveBtn("7_days")}
          />
          <FilterButton
            text="30 Days"
            isActive={activeBtn === "30_days"}
            onClick={() => setActiveBtn("30_days")}
          />
          <FilterButton
            text="All Time"
            isActive={activeBtn === "all_time"}
            onClick={() => setActiveBtn("all_time")}
          />
          <FilterButton
            text="Custom Date"
            isActive={activeBtn === "custom_date"}
            onClick={() => {
              setActiveBtn("custom_date");
              setModalOpen(true);
            }}
          />

          <Modal isOpen={modalOpen} onClose={onCloseModal}>
            <div className="my-4 z-40">
              <label className="block text-gray-700 font-bold mb-2">
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
              />
              <label className="block text-gray-700 font-bold mb-2">
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
              />
              <button
                onClick={() =>
                  filterViewsData(views, customDateRange(startDate, endDate))
                }
                className="w-full py-2 rounded-lg bg-pink-500 text-white mt-5"
              >
                Apply
              </button>
            </div>
          </Modal>
        </div>
        {/* graph charts */}
        <div className="z-10 w-[95%] mb-10">
          <GraphChart chartData={chartData} filter={activeBtn} />
          <div className="flex lg:flex-row mt-6 justify-between md:flex-col">

            <div className="lg:w-[49%] sm:w-full border-2 sm:mb-5 border-[#EFF1F6] rounded-[12px] p-3 min-h-80">
              <DoughnutChart locations={appData?.top_locations} title="Top Locations" />
            </div>

            <div className="lg:w-[49%] sm:w-full border-2 border-[#EFF1F6] rounded-[12px] p-3 min-h-80">
              <DoughnutChart locations={appData?.top_sources} title="Top Referral source" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
