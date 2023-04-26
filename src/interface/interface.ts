export interface FilterButtonProps {
    text: string;
    isActive?: boolean;
    onClick?: () => void;
  }
  export interface ViewsData {
    [date: string]: number;
  }
  
  export interface Props {
    views: ViewsData;
    filter: String;
  }
  

  export interface LocationData {
    country?: string;
    count: number;
    percent: number;
    source?: string;
  }
  
  export interface DoughnutChartProps {
    locations: LocationData[];
    title: string;
  }