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
  
  export interface DoughnutChartProps {
    data: {
      [key: string]: number;
    };
  }