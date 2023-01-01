import { useTheme } from "@mui/material/styles";
import Chart from "react-apexcharts";

export function PercentageChart() {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ["#27c6db"],
    fill: {
      opacity: 1,
    },
    labels: ["Based on trade"],
    plotOptions: {
      radialBar: {
        startAngle: -120,
        endAngle: 120,
        dataLabels: {
          name: {
            color: "white",
            fontFamily: theme.typography.fontFamily,
          },
          value: {
            color: "white",
          },
        },
        hollow: {
          size: "60%",
        },
        track: {
          background: theme.palette.background.default,
          startAngle: -120,
          endAngle: 120,
        },
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
  };

  const chartSeries = [83];

  return (
    <Chart
      height={350}
      options={chartOptions}
      series={chartSeries}
      type="radialBar"
    />
  );
}
