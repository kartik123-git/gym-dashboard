"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// MUI Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";  
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
const navItems = [
  { href: "/admin", label: "Dashboard", icon: DashboardIcon },
  { href: "/admin/members", label: "Members", icon: PeopleIcon },
  { href: "/admin/attendance", label: "Attendance", icon: FactCheckIcon },
  { href: "/admin/subscriptions", label: "Subscriptions", icon: CreditCardIcon },
  { href: "/admin/reports", label: "Reports", icon: BarChartIcon },
];

export default function Sidebar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  const pathname = usePathname();

  return (
    <aside
      className={`h-screen bg-gradient-to-b from-slate-900 to-slate-950
      border-r border-slate-800 text-white
      transition-all duration-300
      ${isOpen ? "w-64" : "w-20"}
      flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          {isOpen &&(<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <FitnessCenterIcon />
          </div>)}
          

          {isOpen && (
            <div>
              <h2 className="text-lg font-bold">FitPro</h2>
              <p className="text-xs text-slate-400">Admin</p>
            </div>
          )}
        </div>

        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-slate-800"
        >
          {isOpen ?<MenuOpenIcon /> :<MenuIcon/> }
          
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 transition
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
            >
              <Icon fontSize="small" />

              {isOpen && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="border-t border-slate-800 p-2">
        <Link
          href="/admin/settings"
          className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800"
        >
          <SettingsIcon fontSize="small" />
          {isOpen && <span>Settings</span>}
        </Link>

        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-red-600/10 hover:text-red-400">
          <LogoutIcon fontSize="small" />
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
