import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "yup";
import Schema from "./Schema";
import "./Form.css";
import UserForm from "./UserForm";

const UserRegistration = () => {
  const [years, setYears] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    var formData = new FormData();
    formData.append("picture", data.picture[0]);
    formData.append("fullName", data.fullName);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("gender", data.gender);
    formData.append("examYear", data.examYear);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("facebookUrl", data.facebookUrl);
    formData.append("status", data.status);
    formData.append("place", data.place);
    formData.append("blood", data.blood);

    console.log("this is form data", formData);

    axios
      .post("http://localhost:5000/xStudent", data)
      .then((res) => console.log(res))
      .then((data) => {
        if (data.insertedId) {
          console.log("registration successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    var yearList = [];
    const year = new Date().getFullYear() + 1;
    for (var i = 1990; i <= year; i++) {
      yearList.push(i);
    }
    setYears(yearList);
  }, []);
  return (
    <>
      <div className="member-form">
        <h1>Become A Member</h1>

        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="container">
            <div>
              <label>Your Name</label>
              <input
                {...register("fullName", { required: true })}
                placeholder="Enter your full name"
              />
              {errors.fullName?.type === "required" && (
                <p className="errors">
                  {errors.fullName?.type === "required" &&
                    "First name is required"}
                </p>
              )}
            </div>

            <div>
              <label>Upload your image</label>
              <input
                {...register("picture", { required: true })}
                type="file"
                accept="image/*"
              />
            </div>
            <div>
              <label>Your Phone Number</label>
              <input
                {...register("phone", { required: true })}
                placeholder="Enter your Phone Number"
              />
              {errors.phone?.type === "required" && (
                <p className="errors">
                  {errors.phone?.type === "required" &&
                    "Phone Number is required"}
                </p>
              )}
            </div>
            <div>
              <label>Your Email</label>
              <input
                {...register("email", { required: true })}
                placeholder="Enter your Email"
              />
              {errors.email?.type === "required" && (
                <p className="errors">
                  {errors.email?.type === "required" && "Email is required"}
                </p>
              )}
            </div>
            <div>
              <label>Gender</label>
              <select {...register("gender")} placeholder="select gender">
                <option defaultValue>select gender</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Select Your Dakhil Exam Year</label>
              <select
                type="number"
                {...register("examYear", { required: true })}
              >
                <option defaultValue>select year</option>
                {years.map((year, i) => (
                  <option key={i} value={year} defaultValue="select">
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>City you live in currently</label>
              <input {...register("city")} placeholder="Dhaka" />
            </div>
            <div>
              <label>Country you live in currently*</label>
              <input
                {...register("country", { required: true })}
                placeholder="Bangladesh"
              />
            </div>
            <div>
              <label>Facebook User URL</label>
              <input
                {...register("facebookUrl", { required: true })}
                placeholder="https://www.facebook.com/{userName}"
              />
            </div>
            <div>
              <label>Current Status*</label>
              <select {...register("status")}>
                <option defaultValue>select Current Status..</option>
                <option value="Working">Working</option>
                <option value="Retired">Retired</option>
                <option value="Student">Student</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label>Company or Institute name</label>
              <input {...register("place")} placeholder="e.g Dhaka College " />
            </div>
            <div>
              <label>Blood Group</label>
              <input {...register("blood")} placeholder="e.g A+ " />
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default UserRegistration;
