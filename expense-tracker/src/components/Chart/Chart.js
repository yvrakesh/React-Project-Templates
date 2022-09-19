import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  let totalMaximum = 0;
  props.dataPoints.map((dataPoint)=>{
    return totalMaximum += dataPoint.value;
  });
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
