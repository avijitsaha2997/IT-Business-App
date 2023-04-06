import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-gray-400">Copyright © 2023</p>
        <ul className="flex items-center space-x-4">
          <li>
            <a href="/about" className="text-gray-400 hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </li>
          <li>
            <a href="/privacy" className="text-gray-400 hover:text-white">
              Privacy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
