"use client";

import { LineChart } from "@mui/x-charts";

export default function RevenueChart() {
  const revenueData = [
    { month: "Jan", value: 12000 },
    { month: "Feb", value: 18000 },
    { month: "Mar", value: 15000 },
    { month: "Apr", value: 22000 },
    { month: "May", value: 26000 },
    { month: "Jun", value: 24000 },
    { month: "Jul", value: 30000 },
    { month: "Aug", value: 28000 },
    { month: "Sep", value: 32000 },
    { month: "Oct", value: 35000 },
    { month: "Nov", value: 40000 },
    { month: "Dec", value: 45000 },
  ];

  const months = revenueData.map((item) => item.month);
  const revenue = revenueData.map((item) => item.value);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-175">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Monthly Revenue</h3>
        <p className="text-sm text-gray-500">
          Revenue generated per month (₹)
        </p>
      </div>

      <LineChart
        xAxis={[
          {
            data: months,
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: revenue,
            label: "Revenue (₹)",
            area: true, // makes it look premium
            showMark: false, // removes dots
          },
        ]}
        height={320}
        margin={{ top: 20, bottom: 40, left: 60, right: 20 }}
        grid={{ vertical: true, horizontal: true }}
        yAxis={[
          {
            valueFormatter: (value) => `₹${value / 1000}k`,
          },
        ]}
      />
    </div>
  );
}
