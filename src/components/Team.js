import React from "react";
import TeamMember from "./TeamMember";
import pic from "../assets/propic.png";

function Team() {
  return (
    <div className="flex flex-col items-center justify-evenly mt-32">
      <h1 className="text-base font-semibold md:text-xl lg:text-2xl text-center text-gray-800 uppercase mb-8 tracking-[15px]">
        TEAM MEMBERS
      </h1>
      <div className="w-full flex flex-col sm:flex-row items-center justify-evenly mt-10 mb-24">
        <TeamMember
          memberImage={pic}
          memberName={"Avijit Saha"}
          details={"I'm Avijit Saha. I'm a web developer."}
        />
        <TeamMember
          memberImage={pic}
          memberName={"Avijit Saha"}
          details={"I'm Avijit Saha. I'm a web developer."}
        />
      </div>
    </div>
  );
}

export default Team;
