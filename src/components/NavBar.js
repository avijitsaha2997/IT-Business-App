/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { motion } from "framer-motion";
import { auth } from "../firebase";
function NavBar() {
  const [activeLink, setActiveLink] = useState("");
  const [{ user, basket }, dispatch] = useStateValue();

  const logout = () => {
    if (user) {
      auth.signOut();
    }
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="sticky top-0 z-10 drop-shadow-xl">
      <nav className="bg-white opacity-80 ">
        <div className="mx-auto px-6 py-3 flex items-center justify-between">
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl font-bold text-black hover:text-gray-300 ml-0 lg:ml-20"
          >
            <Link to="/" onClick={() => handleLinkClick("home")}>
              <p>Avijit</p>
            </Link>
          </motion.div>

          <motion.div
            initial={{
              x: 200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center mr-0 lg:mr-3"
          >
            <div>
              <ul className="hidden lg:flex lg:items-center lg:justify-between lg:w-auto text-black font-bold">
                <li>
                  <p
                    className={`px-3 py-2 text-xl hover:text-gray-500 transition-all duration-300 ${
                      activeLink === "home"
                        ? "text-gray-500 border-b-2 border-black"
                        : ""
                    }`}
                    onClick={() => handleLinkClick("home")}
                  >
                    <Link to="/">Home</Link>
                  </p>
                </li>
                <li>
                  <p
                    className={`px-3 py-2 text-xl hover:text-gray-500 transition-all duration-300 ${
                      activeLink === "about"
                        ? "text-gray-500 border-b-2 border-black"
                        : ""
                    }`}
                    onClick={() => handleLinkClick("about")}
                  >
                    <Link to="/about">About</Link>
                  </p>
                </li>
                <li>
                  <p
                    className={`px-3 py-2 text-xl hover:text-gray-500 transition-all duration-300 ${
                      activeLink === "product"
                        ? "text-gray-500 border-b-2 border-black"
                        : ""
                    }`}
                    onClick={() => handleLinkClick("product")}
                  >
                    <Link to="/product">Products</Link>
                  </p>
                </li>
                <li>
                  <p
                    className={`px-3 py-2 text-xl hover:text-gray-500 transition-all duration-300 ${
                      activeLink === "contact"
                        ? "text-gray-500 border-b-2 border-black"
                        : ""
                    }`}
                    onClick={() => handleLinkClick("contact")}
                  >
                    <Link to="/contact">Contact</Link>
                  </p>
                </li>
              </ul>
            </div>
            <div
              onClick={() => handleLinkClick("cart")}
              className={`flex items-center ml-14 scale-125 cursor-pointer ${
                activeLink === "cart"
                  ? "text-gray-500 border-b-2 border-black"
                  : ""
              }`}
            >
              <Link to="/cart">
                <ShoppingCartTwoToneIcon className="text-black " />
              </Link>

              <p className="text-black  font-bold  text-lg">{basket.length}</p>
            </div>
            <div>
              {user ? (
                <div className="ml-6">
                  {/* <img /> */}
                  <p className="cursor-pointer text-base">{user?.email}</p>
                  <p
                    className="cursor-pointer text-base font-bold"
                    onClick={logout}
                  >
                    Sign Out
                  </p>
                </div>
              ) : (
                <div className="ml-6">
                  {/* <img /> */}
                  <p className="cursor-pointer text-base">Geust User</p>
                  <Link to={"/login"}>
                    <p className="cursor-pointer text-base font-bold">
                      Sign In
                    </p>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
