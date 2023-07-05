import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Shop from "./Pages/Shop";
import ProductDescription from "./Pages/ProductDescription";
import AddToCart from "./components/AddToCart";

function App() {
  return (
    <>
      <div className="app-container overflow-hidden">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shop" element={<Shop />} /> {/* Check the path */}
            <Route path="addtocart" element={<AddToCart />} />{" "}
            {/* Check the path */}
            <Route
              path="/productdescription/:productId"
              element={<ProductDescription />}
            />{" "}
            {/* Check the path */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
