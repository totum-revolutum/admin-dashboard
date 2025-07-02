import MetricCard from "../components/MetricCard";
import { metrics } from "../constants/metrics";

const Overview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} label={metric.label} value={metric.value} />
      ))}
    </div>
  );
};

export default Overview;
