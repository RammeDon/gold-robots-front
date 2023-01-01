import Chart from "react-apexcharts";
import { useTheme } from "@mui/material/styles";

export function BarChart() {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    colors: ["#13affe", "#fbab49"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      borderColor: theme.palette.divider,
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    legend: {
      labels: {
        colors: 'lightgray',
      },
      show: true,
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
      },
    },
    stroke: {
      colors: ["transparent"],
      show: true,
      width: 2,
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        show: true,
        color: ['white'],
      },
      axisTicks: {
        show: false,
        color: 'white',
      },
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        style: {
          colors: 'lightgray',
        },
      },
    },
    yaxis: {
      axisBorder: {
        color: 'white',
        show: true,
      },
      axisTicks: {
        color: 'white',
        show: true,
      },
      labels: {
        style: {
          colors: 'lightgray',
        },
      },
    },
  };
  const chartSeries = [
    {
      data: [30, 40, 25, 50, 49, 21, 70, 51],
      name: "This week",
    },
    {
      data: [23, 12, 54, 61, 32, 56, 81, 19],
      name: "Last week",
    },
  ];

  return (
    <Chart
      height={300}
      options={chartOptions}
      series={chartSeries}
      type="bar"
    />
  );
}
