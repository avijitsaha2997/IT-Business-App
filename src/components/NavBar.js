/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { Link } from "react-router-dom";

function NavBar() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="sticky top-0 z-10 drop-shadow-xl">
      <nav className="bg-white opacity-80 ">
        <div className="mx-auto px-6 py-3 flex items-center justify-between">
          <a
            href=""
            className="text-6xl font-bold text-black hover:text-gray-300 ml-0 lg:ml-20"
          >
            <Link to="/">
              <h3>Avijit</h3>
            </Link>
          </a>

          <div className="flex items-center mr-0 lg:mr-20">
            <div>
              <ul className="hidden lg:flex lg:items-center lg:justify-between lg:w-auto text-black font-bold">
                <li>
                  <a
                    href=""
                    className={`px-3 py-2 text-xl hover:text-gray-500 transition-all duration-300 ${
                      activeLink === "home"
                        ? "text-gray-500 border-b-2 border-black"
                        : ""
                    }`}
                    onClick={() => handleLinkClick("home")}
                  >
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className={`px-3 py-2 text-xl hover:text-gray-500 transition-all duration-300 ${
                      activeLink === "about"
                        ? "text-gray-500 border-b-2 border-black"
                        : ""
                    }`}
                    onClick={() => handleLinkClick("about")}
                  >
                    <Link to="/about">About</Link>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className={`px-3 py-2 text-xl hover:text-gray-500 transition-all duration-300 ${
                      activeLink === "product"
                        ? "text-gray-500 border-b-2 border-black"
                        : ""
                    }`}
                    onClick={() => handleLinkClick("product")}
                  >
                    <Link to="/product">Product</Link>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className={`px-3 py-2 text-xl hover:text-gray-500 transition-all duration-300 ${
                      activeLink === "contact"
                        ? "text-gray-500 border-b-2 border-black"
                        : ""
                    }`}
                    onClick={() => handleLinkClick("contact")}
                  >
                    <Link to="/contact">Contact</Link>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center ml-14 scale-125 hover:scale-110 cursor-pointer">
              <a href="/cart">
                <Link to="/cart">
                  <ShoppingCartTwoToneIcon className="text-black " />
                </Link>
              </a>
              <p className="text-black  font-bold  text-lg">5</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
