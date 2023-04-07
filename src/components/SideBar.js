import React, { useState } from "react";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function SideBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [toogle, setToogle] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toogleMenu = () => {
    setToogle(!toogle);
  };

  return (
    <div className="lg:hidden flex flex-col items-center justify-between fixed top-32 z-20 left-[-10]">
      {toogle ? (
        <CloseIcon onClick={toogleMenu} className="scale-150 ml-10" />
      ) : (
        <MenuIcon onClick={toogleMenu} className="scale-150 ml-10" />
      )}
      {toogle && (
        <div className=" block w-full  bg-gray-300 rounded-xl mt-5">
          <ul className="text-black font-bold">
            {[
              { name: "Home", link: "/", key: "home" },
              { name: "About", link: "/about", key: "about" },
              { name: "Product", link: "/product", key: "product" },
              { name: "Contact", link: "/contact", key: "contact" },
            ].map((link) => (
              <div className="flex items-center justify-center m-6">
                <li key={link.key}>
                  <Link
                    to={link.link}
                    className={`block px-4 py-2 text-lg text-black transition-all duration-300 rounded-lg ${
                      activeLink === link.key ? "text-white bg-gray-500" : ""
                    }`}
                    onClick={() => handleLinkClick(link.key)}
                  >
                    {link.name}
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SideBar;
