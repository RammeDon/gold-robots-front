import Chart from "react-apexcharts";

export function CounterChart(props) {
  const options = {
    series: [45],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450",
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
        },

      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: [`${props.account.days} Days`],
    dataLabels: {
      formatter: function (val) {
        const percent = (val/1);
        return percent.toFixed(0)
      },
      name: {
        offsetY: -10,
        color: "#fff",
        fontSize: "13px",
      },
      value: {
        color: "#fff",
        fontSize: "30px",
        show: false,
      },
    },
  };

  return (
    <Chart
      options={options}
      type="radialBar"
      series={[props.account.days]}
      height={350}
    ></Chart>
  );
}
