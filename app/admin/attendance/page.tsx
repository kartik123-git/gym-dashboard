"use client";

import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

type Member = {
  id: number;
  name: string;
  plan: string;
  status: "present" | "absent";
};

export default function AttendancePage() {
  const [members, setMembers] = useState<Member[]>([
    { id: 1, name: "Karthik", plan: "Monthly", status: "absent" },
    { id: 2, name: "Rahul", plan: "Yearly", status: "present" },
    { id: 3, name: "Ankit", plan: "Quarterly", status: "absent" },
    { id: 4, name: "Aman", plan: "Monthly", status: "present" },
  ]);

  const markPresent = (id: number) => {
    setMembers((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, status: "present" } : m
      )
    );
  };

  const total = members.length;
  const present = members.filter((m) => m.status === "present").length;
  const absent = total - present;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Attendance</h1>
          <p className="text-gray-500">
            {new Date().toDateString()}
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          <QrCodeScannerIcon />
          Scan QR
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Members" value={total} />
        <StatCard title="Present Today" value={present} />
        <StatCard title="Absent Today" value={absent} />
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Plan</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {members.map((member) => (
              <tr
                key={member.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-4 font-medium">
                  {member.name}
                </td>

                <td className="p-4">{member.plan}</td>

                <td className="p-4">
                  {member.status === "present" ? (
                    <span className="flex items-center gap-1 text-green-600">
                      <CheckCircleIcon fontSize="small" />
                      Present
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-red-500">
                      <CancelIcon fontSize="small" />
                      Absent
                    </span>
                  )}
                </td>

                <td className="p-4">
                  {member.status === "absent" && (
                    <button
                      onClick={() => markPresent(member.id)}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                      Mark Present
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}
