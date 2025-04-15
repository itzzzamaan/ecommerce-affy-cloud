import React, { useState, useEffect } from "react";
import { FaBox, FaTag, FaClipboardList } from "react-icons/fa";

const mockAdminData = {
  Electronics: {
    Phones: {
      Apple: ["iPhone 13", "iPhone 14"],
      Samsung: ["Galaxy S21", "Galaxy S22"]
    },
    Laptops: {
      Dell: ["XPS 13", "Inspiron 15"],
      HP: ["Pavilion", "Envy"]
    }
  },
  Fashion: {
    Clothing: {
      Nike: ["T-Shirts", "Jackets"],
      Adidas: ["Hoodies", "Tracksuits"]
    },
    Footwear: {
      Puma: ["Sneakers", "Running Shoes"],
      Reebok: ["Casual", "Training"]
    }
  }
};

export default function SellerPanel() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);

  const [price, setPrice] = useState("");
  const [discountType, setDiscountType] = useState("flat");
  const [discount, setDiscount] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [description, setDescription] = useState("");
 

  useEffect(() => {
    setSelectedCategory("");
    setSelectedBrand("");
    setSelectedModel("");
    setCategories(selectedProduct ? Object.keys(mockAdminData[selectedProduct]) : []);
    setBrands([]);
    setModels([]);
  }, [selectedProduct]);

  useEffect(() => {
    setSelectedBrand("");
    setSelectedModel("");
    if (selectedProduct && selectedCategory) {
      setBrands(Object.keys(mockAdminData[selectedProduct][selectedCategory]));
    } else {
      setBrands([]);
    }
    setModels([]);
  }, [selectedCategory]);

  useEffect(() => {
    setSelectedModel("");
    if (selectedProduct && selectedCategory && selectedBrand) {
      setModels(mockAdminData[selectedProduct][selectedCategory][selectedBrand]);
    } else {
      setModels([]);
    }
  }, [selectedBrand]);

  useEffect(() => {
    const p = parseFloat(price);
    const d = parseFloat(discount);
    if (!isNaN(p) && !isNaN(d)) {
      if (discountType === "flat") {
        setFinalPrice(Math.max(p - d, 0).toFixed(2));
      } else {
        setFinalPrice(Math.max(p - (p * d) / 100, 0).toFixed(2));
      }
    } else {
      setFinalPrice("");
    }
  }, [price, discount, discountType]);

  const handleListProduct = () => {
    const productDetails = {
      Product: selectedProduct,
      Category: selectedCategory,
      Brand: selectedBrand,
      Model: selectedModel,
      Price: price,
      DiscountType: discountType,
      Discount: discount,
      FinalPrice: finalPrice,
      Description: description
    };

    console.log("Product Listed:", productDetails);
    alert("Product listed successfully!");
  };

  return (
    <div className="min-h-screen flex bg-blue-100">
      <aside className="w-64 bg-gray-800 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Seller Panel</h2>
        <nav className="space-y-4">
          <div className="flex items-center gap-2 hover:bg-blue-800 p-2 rounded cursor-pointer">
            <FaBox /> <span>My Products</span>
          </div>
          <div className="flex items-center gap-2 hover:bg-blue-800 p-2 rounded cursor-pointer">
            <FaClipboardList /> <span>Listed Items</span>
          </div>
          <div className="flex items-center gap-2 hover:bg-blue-800 p-2 rounded cursor-pointer">
            <FaTag /> <span>Offers</span>
          </div>
        </nav>
      </aside>

      <main className="flex-1 p-4 md:p-10">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">List a Product</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectInput label="Product" value={selectedProduct} onChange={setSelectedProduct} options={Object.keys(mockAdminData)} />
            <SelectInput label="Category" value={selectedCategory} onChange={setSelectedCategory} options={categories} disabled={!categories.length} />
            <SelectInput label="Brand" value={selectedBrand} onChange={setSelectedBrand} options={brands} disabled={!brands.length} />
            <SelectInput label="Model / Variant" value={selectedModel} onChange={setSelectedModel} options={models} disabled={!models.length} />
            <TextInput label="Price (₹)" type="number" value={price} onChange={setPrice} />
            <SelectInput
              label="Discount Type"
              value={discountType}
              onChange={setDiscountType}
              options={["flat", "percentage", "None"]}
            />
            <TextInput label="Discount" type="number" value={discount} onChange={setDiscount} />
            <TextInput label="Final Price (₹)" value={finalPrice} disabled />
            <div className="md:col-span-2">
              <label className="font-semibold block mb-1">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-400"
                rows={3}
              />
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={handleListProduct}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md font-semibold transition duration-200"
            >
              List Product
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

const SelectInput = ({ label, value, onChange, options, disabled = false }) => (
  <div>
    <label className="block font-semibold mb-1">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-400"
      disabled={disabled}
    >
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const TextInput = ({ label, value, onChange, type = "text", disabled = false, icon }) => (
  <div>
    <label className="block font-semibold mb-1">{label}</label>
    <div className="flex items-center border rounded p-2 bg-white focus-within:ring-2 focus-within:ring-blue-400">
      {icon && <span className="text-gray-500 mr-2">{icon}</span>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="flex-1 focus:outline-none bg-transparent"
      />
    </div>
  </div>
);
