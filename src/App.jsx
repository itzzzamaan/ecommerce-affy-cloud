import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login Page/Login";
import AdminPanel from "./panels/AdminPanel";
import SellerPanel from "./panels/SellerPanel";
import { CustomerPanel } from "./panels/CustomerPanel";
import Homepage from "./Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/seller-panel" element={<SellerPanel />} />
        <Route path="/customer-panel" element={<CustomerPanel />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
