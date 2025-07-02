const Switch = ({ checked, onChange }) => (
  <div
    role="switch"
    aria-checked={checked}
    onClick={() => onChange(!checked)}
    className={`w-10 h-5 flex items-center rounded-full cursor-pointer transition duration-300 
      ${checked ? "bg-blue-500" : "bg-gray-600"}`}
  >
    <div
      className={`w-4 h-4 bg-white rounded-full shadow transform transition duration-300 
        ${checked ? "translate-x-5" : "translate-x-1"}`}
    />
  </div>
);

export default Switch;
