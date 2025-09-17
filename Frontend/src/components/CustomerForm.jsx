import React, { useState, useEffect } from "react";

export default function CustomerForm({ initialData = null, onCancel, onSave }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("Lead");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setEmail(initialData.email || "");
      setPhone(initialData.phone || "");
      setStatus(initialData.status || "Lead");
    } else {
      setName("");
      setEmail("");
      setPhone("");
      setStatus("Lead");
    }
  }, [initialData]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      alert("Name is required");
      return;
    }
    const payload = {
      id: initialData?.id || undefined,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      status,
    };
    onSave(payload);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-2xl shadow mb-6"
    >
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="block text-sm">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div>
          <label className="block text-sm">Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div>
          <label className="text-sm mr-2">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="p-2 border rounded"
          >
            <option>Lead</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <div className="space-x-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 text-white"
          >
            {initialData ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </form>
  );
}
