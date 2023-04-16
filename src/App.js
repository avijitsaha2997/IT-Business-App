import React, { lazy, Suspense } from "react";
import About from "./components/About";
import CheckoutPage from "./components/CheckoutPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import SlideContent from "./components/SlideContent";
import { Routes, Route } from "react-router-dom";
import Team from "./components/Team";
import Mission from "./components/Mission";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Loading from "./components/Loading";

const Products = lazy(() => import("./components/Products"));

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is>>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="">
      <NavBar />
      <SideBar />
      <Suspense fallback={<Loading />}>
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
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
