import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import SlideContent from "./components/SlideContent";
import Slider from "./components/Slider";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <SlideContent />
              <Footer />
            </div>
          }
        />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
