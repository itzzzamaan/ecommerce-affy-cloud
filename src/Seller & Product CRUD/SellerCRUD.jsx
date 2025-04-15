import React, { useState } from 'react'

const SellerCRUD = () => {
  const [sellers, setSellers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", contact: "", password: "" });
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...sellers];
      updated[editIndex] = form;
      setSellers(updated);
      setEditIndex(null);
    } else {
      setSellers([...sellers, form]);
    }
    setForm({ name: "", email: "", contact: "", password: "" });
    setShowModal(false);
  };

  const handleEdit = (index) => {
    setForm(sellers[index]);
    setEditIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const updated = sellers.filter((_, i) => i !== index);
    setSellers(updated);
    if (editIndex === index) {
      setForm({ name: "", email: "", contact: "", password: "" });
      setEditIndex(null);
    }
  };

  return (
    <div className="relative">
      <h2 className="text-xl font-semibold mb-4">Seller Management</h2>
      <button
        onClick={() => {
          setShowModal(true);
          setForm({ name: "", email: "", contact: "", password: "" });
          setEditIndex(null);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mb-4"
      >
        Add Seller
      </button>

      <table className="w-full mt-2 text-sm border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Contact</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">{seller.name}</td>
              <td className="p-2 border">{seller.email}</td>
              <td className="p-2 border">{seller.contact}</td>
              <td className="p-2 border space-x-2">
                <button onClick={() => handleEdit(index)} className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500">Edit</button>
                <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
            <h3 className="text-lg font-semibold mb-4">{editIndex !== null ? "Edit Seller" : "Add Seller"}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Seller Name" className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Seller Email" className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input name="contact" value={form.contact} onChange={handleChange} placeholder="Contact Number" className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                {editIndex !== null ? "Update Seller" : "Add Seller"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerCRUD;
