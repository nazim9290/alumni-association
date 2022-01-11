import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PopUp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (-1 === document.cookie.indexOf('returning=true')) {
      // run only if cookie not found (-1 means not found)
      Swal.fire({
        title: "Are you Member of hasania alumni association?",
        text: "Please register your details and become a alumni association member",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/becomeMember");
        }
      }); // alert
      document.cookie = 'returning=true'; // set cookie
    }
    
  }, []);

  return <div></div>;
};

export default PopUp;
