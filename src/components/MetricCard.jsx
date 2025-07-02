const MetricCard = ({ label, value }) => (
  <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-md border border-[#2f2f2f] hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]">
    <h3 className="text-lg text-gray-400 mb-1">{label}</h3>
    <p className="text-3xl font-bold text-cyan-400">{value}</p>
  </div>
);

export default MetricCard;
