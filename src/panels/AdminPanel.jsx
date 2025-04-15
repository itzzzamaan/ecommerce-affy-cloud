import React, { useState } from "react";
import SellerCRUD from "../Seller & Product CRUD/SellerCRUD";
import ProductCRUD from "../Seller & Product CRUD/ProductCrud";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

const barData = [
  { name: 'Aug', earnings: 4000, expenses: 2400 },
  { name: 'Sep', earnings: 8000, expenses: 3000 },
  { name: 'Oct', earnings: 6500, expenses: 3200 },
  { name: 'Nov', earnings: 9000, expenses: 4000 },
  { name: 'Dec', earnings: 7500, expenses: 3600 },
];

const pieData = [
  { name: 'Marketing', value: 5000 },
  { name: 'Development', value: 12000 },
  { name: 'Operations', value: 8000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("welcome");

  const DashboardContent = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">Earnings Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="earnings" fill="#4F46E5" />
              <Bar dataKey="expenses" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">Total Investment</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={70} fill="#8884d8" label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">Quick Stats</h3>
          <ul className="space-y-2">
            <li> Total Products: <strong>40</strong></li>
            <li> Sellers: <strong>10</strong></li>
            <li> Customers : <strong>120</strong></li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">Product Distribution</h3>
          <PieChart width={250} height={200}>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={70} fill="#6366F1" />
            <Tooltip />
          </PieChart>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">Revenue Comparison</h3>
          <BarChart width={250} height={200} data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="#34D399" />
          </BarChart>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">Team Engagement</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>95% Attendance</li>
            <li>Weekly Feedback Sessions</li>
            <li>Remote Support Active</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">Recent Activities</h3>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>✔️ New product added by admin</li>
            <li>✔️ Seller profile updated</li>
            <li>⚠️ Low stock alert triggered</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">Top Sellers</h3>
          <ul className="space-y-1">
            <li>📦 Seller A – 500 products</li>
            <li>📦 Seller B – 420 products</li>
            <li>📦 Seller C – 410 products</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">System Health</h3>
          <ul className="space-y-1 text-green-600">
            <li>✅ API Running</li>
            <li>✅ DB Synced</li>
            <li>✅ Load Balanced</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-blue-100">
      <aside className="w-64 bg-gray-800 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <button onClick={() => setActiveTab("welcome")} className="block w-full text-left px-4 py-2 rounded hover:bg-zinc-900 transition">Dashboard</button>
        <button onClick={() => setActiveTab("seller")} className="block w-full text-left px-4 py-2 rounded hover:bg-zinc-900 transition">Seller Management</button>
        <button onClick={() => setActiveTab("product")} className="block w-full text-left px-4 py-2 rounded hover:bg-zinc-900 transition">Product Management</button>
      </aside>
      <main className="flex-1 p-6 overflow-auto">
        {activeTab === "welcome" && (
          <>
            <div className="text-center text-2xl font-semibold text-gray-700 mb-4">Welcome to the Admin Panel</div>
            <DashboardContent />
          </>
        )}
        {activeTab === "seller" && <SellerCRUD />}
        {activeTab === "product" && <ProductCRUD />}
      </main>
    </div>
  );
}
