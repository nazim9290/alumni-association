import React from "react";
import NavBar from "../../../Shared/NavBar/NavBar";
import Advisor from "../../Member/Advisor/Advisor";
import ExecutiveMember from "../../Member/ExecutiveMember/ExecutiveMember";

const Committees = () => {
  return (
    <div>
      <NavBar/>
      <Advisor />
      <ExecutiveMember />
    </div>
  );
};

export default Committees;
