import { sidebarLinks } from "../constants/navigation";
import SidebarLink from "../components/SidebarLink";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#121212] border-r border-[#1f1f1f] p-6">
      <h1 className="text-2xl font-bold mb-6 text-cyan-400">Admin</h1>
      <nav className="flex flex-col gap-4">
        {sidebarLinks.map(({ to, label }) => (
          <SidebarLink key={to} to={to} label={label} />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
