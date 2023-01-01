import { useTheme } from "@mui/material/styles";
import Chart from 'react-apexcharts';

export const ChartLine = () => {
    const theme = useTheme();
  
    const chartOptions = {
      chart: {
        background: 'transparent',
        stacked: false,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      colors: ['#7783DB'],
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 1
      },
      grid: {
        show: false
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      theme: {
        mode: theme.palette.mode
      },
      tooltip: {
        enabled: false
      },
      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: false
      }
    };
  
    const chartSeries = [{ data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30] }];
  
    return (
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
      />
    );
  };