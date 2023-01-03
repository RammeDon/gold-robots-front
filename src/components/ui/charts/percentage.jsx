import { useTheme } from "@mui/material/styles";
import Chart from "react-apexcharts";

export function PercentageChart(props) {
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

  const chartSeries = [props.account.percentageInTrades];

  return (
    <Chart
      height={350}
      options={chartOptions}
      series={chartSeries}
      type="radialBar"
    />
  );
}

export function DurationChart(props) {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ["#27c6db","#d14343"],
    fill: {
      opacity: 1,
    },
    labels: ["Duration"],
    plotOptions: {
      radialBar: {
        startAngle: -120,
        endAngle: 120,
        dataLabels: {
          name: {
            color: "white",
          },
          value: {
            color: "white",
            formatter: (val, opt) => {
              return val + " days";
            },
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

  return (
    <Chart
      height={300}
      series={props.data}
      options={chartOptions}
      type="radialBar"
      className="relative "
    />
  );
}
