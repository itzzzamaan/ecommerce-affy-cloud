import { useState } from "react";

const ProductCRUD = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", category: "", brand: "", model: "", variant: "" });
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...products];
      updated[editIndex] = form;
      setProducts(updated);
      setEditIndex(null);
    } else {
      setProducts([...products, form]);
    }
    setForm({ name: "", price: "", category: "", brand: "", model: "", variant: "" });
    setShowModal(false);
  };

  const handleEdit = (index) => {
    setForm(products[index]);
    setEditIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
    if (editIndex === index) {
      setForm({ name: "", price: "", category: "", brand: "", model: "", variant: "" });
      setEditIndex(null);
    }
  };

  return (
    <div className="relative">
      <h2 className="text-xl font-semibold mb-4">Product Management</h2>
      <button
        onClick={() => {
          setShowModal(true);
          setForm({ name: "", price: "", category: "", brand: "", model: "", variant: "" });
          setEditIndex(null);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mb-4"
      >
        Add Product
      </button>

      <table className="w-full mt-2 text-sm border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Brand</th>
            <th className="p-2 border">Model</th>
            <th className="p-2 border">Variant</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">{product.name}</td>
              <td className="p-2 border">{product.price}</td>
              <td className="p-2 border">{product.category}</td>
              <td className="p-2 border">{product.brand}</td>
              <td className="p-2 border">{product.model}</td>
              <td className="p-2 border">{product.variant}</td>
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
            <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">&times;</button>
            <h3 className="text-lg font-semibold mb-4">{editIndex !== null ? "Edit Product" : "Add Product"}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Product Name" className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input name="price" value={form.price} onChange={handleChange} placeholder="Product Price" className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input name="brand" value={form.brand} onChange={handleChange} placeholder="Brand" className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input name="model" value={form.model} onChange={handleChange} placeholder="Model" className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input name="variant" value={form.variant} onChange={handleChange} placeholder="Variant" className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                {editIndex !== null ? "Update Product" : "Add Product"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCRUD;
