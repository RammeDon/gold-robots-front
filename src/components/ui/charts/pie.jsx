import Chart from "react-apexcharts";

export function ProfitSharingChart(props) {
  const chartOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ["#7bc67e", "#ffb547"],
    dataLabels: {
      enabled: true,
      formatter: (val, opt) => {
        return `${val}%`;
      },
    },
    fill: {
      opacity: 1,
    },
    labels: ["Your's", "Our's"],
    legend: {
      show: false,
    },
    stroke: {
      width: 1,
    },
  };

  return (
    <Chart
      type="pie"
      series={[props.data, 100 - props.data]}
      options={chartOptions}
      className="relative top-16"
    ></Chart>
  );
}
