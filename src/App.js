import About from "./components/About";
import CheckoutPage from "./components/CheckoutPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import SideBar from "./components/SideBar";
import SlideContent from "./components/SlideContent";
import { Routes, Route } from "react-router-dom";
import Team from "./components/Team";
import Mission from "./components/Mission";

function App() {
  return (
    <div className="">
      <NavBar />
      <SideBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <SlideContent />
              <Team />
              <Mission />
              <Footer />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
