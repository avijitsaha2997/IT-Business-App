import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-between">
      <div className="m-10 flex flex-col items-center justify-between">
        <div className="flex items-center mb-6">
          <img
            src="https://i.pinimg.com/originals/50/38/f6/5038f6672f089f3a50c4f075feddfc42.gif"
            alt=""
            className="w-40 h-40 rounded-lg "
          />
          <h1 className="text-3xl text-center font-bold mb-4 tracking-[8px]">
            ABOUT US
          </h1>
          <img
            src="https://i.pinimg.com/originals/50/38/f6/5038f6672f089f3a50c4f075feddfc42.gif"
            alt=""
            className="w-40 h-40 rounded-lg "
          />
        </div>

        <p className="text-lg mb-6 text-justify max-w-5xl">
          At our gadget store, we are passionate about technology and helping
          our customers find the right gadgets to fit their needs. Our team
          consists of tech experts who stay up-to-date with the latest trends
          and innovations in the industry. We pride ourselves on offering a
          personalized shopping experience, whether you're a seasoned tech pro
          or new to the world of gadgets. Our goal is to provide you with the
          knowledge and tools to make informed decisions about your tech
          purchases. We also believe in the importance of customer satisfaction,
          and we strive to ensure that each and every customer is happy with
          their purchase. Thank you for choosing us as your go-to source for all
          things tech!
        </p>
      </div>

      <div className="flex gap-20 flex-col md:flex-row m-10 justify-between items-center">
        <motion.div
          initial={{
            y: -300,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between border border-black p-5 rounded-xl"
        >
          <img
            className="w-24 h-24"
            src="https://static.thenounproject.com/png/1876347-200.png"
            alt=""
          />
          <h1 className="text-lg font-semibold mt-5 mb-3">Carrer</h1>
          <p className="text-justify px-6">
            To be successful in this role, we have strong customer service, be
            comfortable working with technology, and have excellent
            communication skills.
          </p>
        </motion.div>
        <motion.div
          initial={{
            y: -500,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between border border-black p-5 rounded-xl"
        >
          <img
            className="w-24 h-24"
            src="https://www.pngarts.com/files/2/Friendship-PNG-Transparent-Image.png"
            alt=""
          />
          <h1 className="text-lg font-semibold mt-5 mb-3">Leadership</h1>
          <p className="text-justify px-6">
            Our knowledgeable and friendly staff are always ready to assist you
            with any questions you may have, and can provide expert
            recommendations.
          </p>
        </motion.div>
        <motion.div
          initial={{
            y: -800,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between border border-black p-5 rounded-xl"
        >
          <img
            className="w-24 h-24"
            src="https://pic.onlinewebfonts.com/svg/img_245496.png"
            alt=""
          />
          <h1 className="text-lg font-semibold mt-5 mb-3">Partnership</h1>
          <p className="text-justify px-6">
            to ensure that each and every customer is happy with their purchase.
            Thank you for choosing us as your go-to source for all things tech!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
