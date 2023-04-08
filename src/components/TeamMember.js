import React from "react";
import { motion } from "framer-motion";
function TeamMember({ memberImage, image1, image2, details, memberName }) {
  return (
    <div>
      <article className="flex flex-col rounded-2xl items-center space-y-7 w-[300px] md:w-[400px] xl:w-[550px]  p-10 hover:opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden border">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="w-32 h-32 rounded-lg xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={memberImage}
        />
        <div className="px-0 md:px-10">
          <div className="flex space-x-2 my-2 items-center justify-center"></div>
          <p className="uppercase py-5 text-black flex items-center justify-center">
            {memberName}
          </p>
          <div clasname="w-auto">
            <p className="px-10 text-center text-lg">• {details}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default TeamMember;
