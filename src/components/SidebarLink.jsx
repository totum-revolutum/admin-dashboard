import { NavLink } from "react-router-dom";

const SidebarLink = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive ? "text-cyan-400 font-semibold" : "hover:text-cyan-400"
    }
  >
    {label}
  </NavLink>
);

export default SidebarLink;
