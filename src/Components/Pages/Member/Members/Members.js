import React from "react";
import NavBar from "../../../Shared/NavBar/NavBar";
import DonorsMember from "../DonorsMember/DonorsMember";
import Member from "../Member/Member";
import TechTeam from "../TechTeam/TechTem";

const Members = () => {
  return (
    <div>
      <NavBar/>
      <Member />
      <TechTeam />
      <DonorsMember />
    </div>
  );
};

export default Members;
