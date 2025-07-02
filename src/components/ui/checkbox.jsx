const Checkbox = ({ id, checked, onCheckedChange }) => (
  <input
    type="checkbox"
    id={id}
    checked={checked}
    onChange={(e) => onCheckedChange(e.target.checked)}
    className="accent-[#3b82f6] w-4 h-4"
  />
);

export default Checkbox;
