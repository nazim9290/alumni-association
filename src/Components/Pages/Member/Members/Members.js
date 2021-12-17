import React from "react";
import Advisor from "../Advisor/Advisor";
import DonorsMember from "../DonorsMember/DonorsMember";
import Member from "../Member/Member";
import TechTeam from "../TechTeam/TechTem";

const Members = () => {
  return (
    <div>
      <Advisor />
      <Member />
      <TechTeam />
      <DonorsMember />
    </div>
  );
};

export default Members;
