"use client";

import { LineChart } from "@mui/x-charts/LineChart";

export default function AttendanceChart() {
  const days = [
    "1", "2", "3", "4", "5", "6", "7",
    "8", "9", "10", "11", "12", "13", "14"
  ];

  const presentData = [
    32, 35, 30, 40, 38, 42, 45,
    44, 46, 48, 50, 49, 47, 52
  ];

  const absentData = [
    8, 5, 10, 6, 7, 4, 3,
    4, 2, 2, 1, 3, 4, 1
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow w-full">
      <h3 className="text-lg font-semibold mb-4">
        Attendance Overview (Last 14 Days)
      </h3>

      <LineChart
        xAxis={[
          {
            data: days,
            scaleType: "band",
            label: "Days",
          },
        ]}
        series={[
          {
            data: presentData,
            label: "Present",
            color: "#16a34a",
          },
          {
            data: absentData,
            label: "Absent",
            color: "#dc2626",
          },
        ]}
        height={300}
      />
    </div>
  );
}
