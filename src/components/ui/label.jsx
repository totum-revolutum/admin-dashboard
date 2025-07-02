const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="text-gray-300">
    {children}
  </label>
);

export default Label;
