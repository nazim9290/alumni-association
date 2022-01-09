import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PopUp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (-1 === document.cookie.indexOf("returning=true")) {
      // run only if cookie not found (-1 means not found)

      Swal.fire({
        title: "হাচানিয়া প্রাক্তন ছাত্রছাত্রী পরিষদে স্বাগতম !!! ",
        text: "আপনি যদি এই সাইটে নতুন হয়ে থাকেন তাহলে প্রথমে লগিন অপশন হতে রেজিস্ট্রেশন করুন । আপনি হাজী মাদবর আলী  হাচানিয়া দাখিল মাদ্রাসার প্রাক্তন ছাত্র-ছাত্রী হলে মেম্বার রেজিস্ট্রেশন সম্পন্য করুন ।",
        icon: "",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "মেম্বার রেজিস্ট্রেশন",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/becomeMember");
        }
      }); // alert
      document.cookie = "returning=true"; // set cookie
    }
  }, []);

  return <div></div>;
};

export default PopUp;
