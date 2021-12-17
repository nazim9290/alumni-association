import React from "react";
import DonorsMember from "../DonorsMember/DonorsMember";
import Member from "../Member/Member";
import TechTeam from "../TechTeam/TechTem";

const Members = () => {
  return (
    <div>
      <Member />
      <TechTeam />
      <DonorsMember />
    </div>
  );
};

export default Members;
