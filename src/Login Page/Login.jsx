import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [activeTab, setActiveTab] = useState("admin");

  const renderForm = () => {
    switch (activeTab) {
      case "admin":
        return <LoginForm title="Admin Login" type="admin" />;
      case "seller":
        return <LoginForm title="Seller Login" type="seller" />;
      case "customer":
        return <CustomerForm />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">
        <div className="flex justify-between mb-6">
          {["admin", "seller", "customer"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-semibold flex-1 py-2 rounded-lg mx-1 transition duration-300 ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab === "admin"
                ? "Admin Login"
                : tab === "seller"
                ? "Seller Login"
                : "Customer"}
            </button>
          ))}
        </div>
        {renderForm()}
      </div>
    </div>
  );
}

const credentials = {
  admin: { username: "admin@demo.com", password: "admin123" },
  seller: { username: "seller@demo.com", password: "seller123" },
  customer: { username: "customer@demo.com", password: "customer123" },
};

const LoginForm = ({ title, type }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = credentials[type];
    if (username === user.username && password === user.password) {
      if (type === "admin") navigate("/admin-panel");
      if (type === "seller") navigate("/seller-panel");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleLogin}>
      <h2 className="text-xl font-semibold text-gray-700 text-center">{title}</h2>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Login
      </button>
    </form>
  );
};

const CustomerForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isRegistering) {
      if (
        email === credentials.customer.username &&
        password === credentials.customer.password
      ) {
        navigate("/customer-panel");
      } else {
        setError("Invalid login credentials.");
      }
    } else {
      if (name && email && password) {
        alert("Registered successfully!");
        setIsRegistering(false);
      } else {
        setError("Please fill all fields to register.");
      }
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700 text-center">
        {isRegistering ? "Customer Register" : "Customer Login"}
      </h2>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {isRegistering && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {isRegistering ? "Register" : "Login"}
        </button>
      </form>
      <button
        onClick={() => {
          setIsRegistering(!isRegistering);
          setError("");
        }}
        className="text-sm text-blue-600 hover:underline w-full text-center"
      >
        {isRegistering
          ? "Already have an account? Login"
          : "Don't have an account? Register"}
      </button>
    </div>
  );
};
