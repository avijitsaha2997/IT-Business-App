import React from "react";
import { motion } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Hero() {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-7 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-black text-2xl lg:text-4xl font-semibold">
        WELCOME TO OUR STORE
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://i.pinimg.com/originals/7d/9b/1d/7d9b1d662b28cd365b33a01a3d0288e1.gif"
        className="-mb-32 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-72 md:h-96 xl:w-[500px] xl:h-[600px]"
      />
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
        className="space-y-10 px-0 md:px-10 flex flex-col items-center justify-between"
      >
        <h4 className="text-2xl uppercase">
          Here is, <span className="underline decoration-[#000]/50">short</span>{" "}
          description of our store
        </h4>
        <p className="text-base text-justify">
          Our gadget store is a whimsical wonderland of fun and functional
          gadgets, curated for those who love to add a touch of magic to their
          digital life. Our founder's passion for technology and love of playful
          accessories inspired us to create a store where gadgets are not just
          tools, but also charming and adorable accessories. Come visit us and
          let us help you find the perfect gadget to brighten up your day! At
          our store, we offer a delightful shopping experience with friendly
          staff and interactive play areas for you to test out our gadgets. So,
          we are constantly updating our collection with new, cool and exciting
          gadgets.
        </p>
        <div className="flex items-center justify-evenly w-full">
          <FacebookIcon className="scale-150"></FacebookIcon>
          <InstagramIcon className="scale-150"></InstagramIcon>
          <GitHubIcon className="scale-150"></GitHubIcon>
          <LinkedInIcon className="scale-150"></LinkedInIcon>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
