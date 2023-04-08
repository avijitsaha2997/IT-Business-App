import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-gray-400">Copyright © 2023</p>

        <div className="flex items-center justify-between w-40">
          <a href="https://www.facebook.com/wwwhite.angelll/">
            <FacebookIcon className="scale-125 cursor-pointer text-gray-400 hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/avijitsaha2997/">
            <LinkedInIcon className="scale-125 cursor-pointer text-gray-400 hover:text-white" />
          </a>
          <a href="https://github.com/avijitsaha2997">
            <GitHubIcon className="scale-125 cursor-pointer text-gray-400 hover:text-white" />
          </a>
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/about">
              <p className="text-gray-400 hover:text-white">About</p>
            </Link>
          </li>
          <li>
            <Link to="/product">
              <p className="text-gray-400 hover:text-white">Products</p>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <p className="text-gray-400 hover:text-white">Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
