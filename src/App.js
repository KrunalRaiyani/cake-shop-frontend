import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Products from "./Pages/Products";
import Footer from "./components/Footer";
import NewsletterSection from "./components/NewsletterSection";
import Header from "./components/Header";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <NewsletterSection />
      <Footer />
    </>
  );
}

export default App;
