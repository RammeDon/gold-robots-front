import { useTheme } from "@mui/material/styles";
import Chart from "react-apexcharts";

const data = {
  series: [{ data: [10, 5, 11, 20, 13, 28, 18, 30, 33, 32, 30, 35] }],
  categories: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
};

export const PerformanceChart = () => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ["#00ab57"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.1,
        shadeIntensity: 1,
        stops: [0, 100],
        type: "vertical",
      },
      type: "gradient",
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
    },
    markers: {
      size: 6,
      strokeColors: theme.palette.background.default,
      strokeWidth: 3,
    },
    stroke: {
      curve: "smooth",
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true,
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true,
      },
      categories: data.categories,
      labels: {
        offsetY: 5,
        style: {
          colors: 'white',
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => (value > 0 ? `${value}M` : `${value}`),
        offsetX: -10,
        style: {
          colors: ['white'],
        },
      },
    },
  };

  return (
    <Chart
      height={350}
      options={chartOptions}
      series={data.series}
      type="area"
    />
  );
};
