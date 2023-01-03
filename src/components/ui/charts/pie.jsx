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
      width={280}
      className="relative top-12 self-center"
    ></Chart>
  );
}
