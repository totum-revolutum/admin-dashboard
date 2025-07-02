const Card = ({ children, className = "" }) => (
  <div
    className={`bg-[#1a1a1a] p-6 rounded-xl border border-[#2f2f2f] ${className}`}
  >
    {children}
  </div>
);

export default Card;
