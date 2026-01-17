"use client";

export default function Navbar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  return (
    <header className="bg-white shadow p-4 flex items-center gap-4">
     

      <h1 className="font-semibold">Admin Dashboard</h1>
    </header>
  );
}
