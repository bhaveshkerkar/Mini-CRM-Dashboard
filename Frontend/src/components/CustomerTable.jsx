import React from "react";

export default function CustomerTable({ customers, onEdit, onDelete }) {
  if (!customers.length)
    return (
      <div className="p-6 bg-white rounded-2xl shadow">No customers yet.</div>
    );

  return (
    <div className="bg-white rounded-2xl shadow">
      <table className="w-full table-auto">
        <thead className="bg-slate-50">
          <tr>
            <th className="text-left p-3">Name</th>
            <th className="text-left p-3">Email</th>
            <th className="text-left p-3">Phone</th>
            <th className="text-left p-3">Status</th>
            <th className="text-left p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id} className="border-t">
              <td className="p-3">{c.name}</td>
              <td className="p-3">{c.email}</td>
              <td className="p-3">{c.phone}</td>
              <td className="p-3">{c.status}</td>
              <td className="p-3">
                <button
                  onClick={() => onEdit(c.id)}
                  className="mr-2 px-3 py-1 rounded bg-yellow-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(c.id)}
                  className="px-3 py-1 rounded bg-red-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
