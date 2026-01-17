import StatCard from "@/components/StatCard";
import AttendanceChart from "@/components/charts/AttendanceChart";
import RevenueChart from "@/components/charts/RevenueChart";
import FilterDrawer from "@/components/FilterDrawer";


export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Total Members" value="120" />
        <StatCard title="Active Plans" value="95" />
        <StatCard title="Today Attendance" value="48" />
        <StatCard title="Monthly Revenue" value="₹45,000" />
      </div>

      {/* Graph */}
      <div className="flex gap-3"> <RevenueChart />
      <AttendanceChart /></div>
      <FilterDrawer/>
     

    </div>
  );
}
