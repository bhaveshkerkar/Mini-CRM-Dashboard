import { useEffect, useState } from "react";

function App() {
  const [customers, setCustomers] = useState([]);

  // Fetch customers from backend
  useEffect(() => {
    fetch("http://localhost:5000/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((err) => console.error("Error fetching customers:", err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">CRM Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">Total Customers</h2>
          <p className="text-2xl font-bold">{customers.length}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">Leads</h2>
          <p className="text-2xl font-bold">
            {customers.filter((c) => c.status === "Lead").length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">Active</h2>
          <p className="text-2xl font-bold">
            {customers.filter((c) => c.status === "Active").length}
          </p>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Customer List</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="text-center">
                <td className="p-2 border">{c.name}</td>
                <td className="p-2 border">{c.email}</td>
                <td className="p-2 border">{c.phone}</td>
                <td className="p-2 border">{c.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
