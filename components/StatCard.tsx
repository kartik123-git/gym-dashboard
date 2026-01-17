interface prop{
  title:any
  value:any
}

export default function StatCard({ title, value }:prop) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}
    