import React from "react";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

function NavBar() {
  return (
    <div className="sticky top-0 z-10 drop-shadow-xl">
      <nav className="bg-white opacity-90 ">
        <div className="mx-auto px-6 py-3 flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-bold text-black hover:text-gray-300 ml-0 lg:ml-20"
          >
            <h3>Avijit</h3>
          </a>

          <div className="flex items-center mr-0 lg:mr-20">
            <ul className="hidden lg:flex lg:items-center lg:justify-between lg:w-auto text-black font-bold">
              <li>
                <a href="/" className="px-3 py-2 hover:text-gray-500 text-lg">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="px-3 py-2 hover:text-gray-500 text-lg"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="px-3 py-2 hover:text-gray-500 text-lg"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="px-3 py-2 hover:text-gray-500 text-lg"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex items-center ml-14 hover:scale-125 cursor-pointer">
              <a href="/cart">
                <ShoppingCartTwoToneIcon className="text-black " />
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
