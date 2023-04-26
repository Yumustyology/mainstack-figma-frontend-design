import { ViewsData } from "../interface/interface";

export const formatText = (text: string) => {
    return text === "1_day"
      ? "1 Day"
      : text === "7_days"
      ? "7 Days"
      : text === "30_days"
      ? "30 Days"
      : text === "all_time"
      ? "All Time"
      : text === "custom_date"
      ? "Custom Date"
      : text;
  };

   // Filter the views data to include only the custom date range
   export const customDateRange = (start: string, end: string): number => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    return (
      Math.round(Math.abs((endDate.getTime() - startDate.getTime()) / oneDay)) +
      1
    );
  };

     // Filter the views data to include only the last n days
     export const filterViewsData = (data: ViewsData, n: number) => {
    const dates = Object.keys(data).sort();
    const startDate = dates[dates.length - n];
    const filteredData: ViewsData = {};
    for (const date in data) {
      if (date >= startDate) {
        filteredData[date] = data[date];
      }
    }
    return filteredData;
  };
