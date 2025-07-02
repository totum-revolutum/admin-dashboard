const Input = ({ id, className = "", ...props }) => (
  <>
    <style>
      {`
        input:-webkit-autofill {
          -webkit-text-fill-color: white !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}
    </style>
    <input
      id={id}
      className={`w-full p-2 rounded bg-[#0e0e0e] text-white border border-[#2f2f2f] autofill:shadow-[inset_0_0_0px_1000px_#0e0e0e] autofill:text-white ${className}`}
      {...props}
    />
  </>
);

export default Input;
