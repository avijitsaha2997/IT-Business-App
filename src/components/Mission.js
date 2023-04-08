import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Mission() {
  return (
    <div className="flex flex-col items-center mb-20 mt-10">
      <h1 className="text-base font-semibold md:text-xl lg:text-2xl text-center text-gray-800 uppercase mb-8 tracking-[15px]">
        OUR MISSION
      </h1>

      <div className="w-[400px] md:w-[600px] lg:w-[1000px] flex flex-col items-center">
        <img
          src="https://cdn.dribbble.com/users/527451/screenshots/3085678/skillsoft_icon_goals.gif"
          alt=""
        />
        <motion.p
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center text-base"
        >
          At our gadget store, our mission is to provide our customers with the
          latest and greatest technology and gadgets that make their lives
          easier, more efficient, and more enjoyable. We strive to offer a wide
          selection of high-quality products at competitive prices,
        </motion.p>
        <motion.p
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center text-base"
        >
          {" "}
          while providing exceptional customer service and support. Our goal is
          to become the go-to destination for anyone looking for the latest and
          greatest gadgets that can enhance their daily lives and bring them
          closer to the future.
        </motion.p>
        <Link to="/product">
          <div className="w-auto bg-gray-400 text-lg text-white hover:text-black font-semibold uppercase cursor-pointer px-8 py-4 mt-6 rounded-lg tracking-[2px]">
            {"Visit Shop"}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Mission;
