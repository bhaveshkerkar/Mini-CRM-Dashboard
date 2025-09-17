import React from "react";

export default function SummaryCards({ customers }) {
  const total = customers.length;
  const counts = customers.reduce((acc, c) => {
    acc[c.status] = (acc[c.status] || 0) + 1;
    return acc;
  }, {});
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="p-4 bg-white rounded-2xl shadow">
        <div className="text-sm">Total Customers</div>
        <div className="text-2xl font-bold">{total}</div>
      </div>
      <div className="p-4 bg-white rounded-2xl shadow">
        <div className="text-sm">Leads</div>
        <div className="text-2xl font-bold">{counts["Lead"] || 0}</div>
      </div>
      <div className="p-4 bg-white rounded-2xl shadow">
        <div className="text-sm">Active</div>
        <div className="text-2xl font-bold">{counts["Active"] || 0}</div>
      </div>
      <div className="p-4 bg-white rounded-2xl shadow">
        <div className="text-sm">Inactive</div>
        <div className="text-2xl font-bold">{counts["Inactive"] || 0}</div>
      </div>
    </div>
  );
}
