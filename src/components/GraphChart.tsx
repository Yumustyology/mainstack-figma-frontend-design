import React from "react";
import Chart from "react-apexcharts";

interface ViewsData {
  [date: string]: number;
}

interface Props {
  views?: ViewsData;
  filter: String;
  chartData: any;
}

const AreaChart: React.FC<Props> = ({ chartData }) => {
  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default AreaChart;
