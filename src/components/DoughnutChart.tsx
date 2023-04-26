import React from "react";
import Chart from "react-apexcharts";
import { DoughnutChartProps } from "../interface/interface";



const DoughnutChart: React.FC<DoughnutChartProps> = ({ locations, title }) => {
  const chartData = {
    series: locations.map((location) => location.count),
    options: {
      chart: {
        type: "donut",
        height: 350,
      },

      labels: locations.map(
        (location) => `${title === "Top Locations" ? location.country : location.source} (${location.percent}%)`
      ),
      plotOptions: {
        pie: {
          donut: {
            size: "60%",
            minSize: "300px",
          },
        },
      },
      colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val;
          },
        },
      },
      fill: {
        colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      dataLabels: {
        enabled: true,
        formatter: function (val: any, opts: any) {
          return opts.w.config.series[opts.seriesIndex] + "%";
        },
        style: {
          fontSize: "16px",
          fontFamily: "sohne",
          fontWeight: "bold",
        },
      },
      legend: {
        show: true,
        position: "left",
        verticalAlign: "middle",
        fontSize: "16px",
        fontFamily: "sohne",
        labels: {
          colors: "#131316",
          formatter: function (val: any, opts: any) {
            const location = locations[opts.seriesIndex];
            return `${
              title === "Top Locations" ? location.country : location.source
            } - ${location.percent}%`;
          },
        },
        itemMargin: {
          vertical: 5,
        },
      },
    },
  };

  return (
    <>
      <div className="w-full flex justify-between mb-5">
        <span className=" text-[#131316] text-[20px] leading-[24px] bold-font">
          {title}
        </span>
        <span className="text-[#FF5403] text-[14px] leading-[22px] cursor-pointer">
          View analytics
        </span>
      </div>

      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        height={350}
      />
    </>
  );
};

export default DoughnutChart;
