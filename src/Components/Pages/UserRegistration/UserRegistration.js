import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../../Shared/NavBar/NavBar";
import "./Form.css";


const UserRegistration = () => {
  const [url, setUrl] = useState("");
  const [years, setYears] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const processFile = (e) => {
    var image = e.target.files[0];
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "alumni");
    data.append("cloud_name", "dpakfnqvn");
    fetch("https://api.cloudinary.com/v1_1/dpakfnqvn/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (data) => {
    const userData = {
      picture: url,
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      gender: data.gender,
      examYear: data.examYear,
      city: data.city,
      country: data.country,
      facebookUrl: data.facebookUrl,
      twitterUrl: data.twitterUrl,
      linkedinUrl: data.linkedinUrl,
      status: data.status,
      place: data.place,
      blood: data.blood,
      comments: data.comments,
    };

    axios
      .post("https://calm-escarpment-64359.herokuapp.com/xStudent", userData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your Registration has been Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        reset();
        setTimeout(() => {
          navigate("/");
        }, 2000);
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
    <NavBar/>
      <div className="member-form">
        <h1>Become A Member</h1>

        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="container">
            <div>
              <label>
                Your Name <span className="required">*</span>
              </label>
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
              <label>
                Member Profile Picture (use image less than 1MB and Recommended
                Dimension 600px/600px, Recommended Image Type: JPEG/JPG/PNG )
                <span className="required">*</span>
              </label>
              <input
                type="file"
                {...register("image", { required: true })}
                onChange={processFile}
              />
            </div>
            <div>
              <label>
                Your Phone Number <span className="required">*</span>
              </label>
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
              <label>
                Your Email <span className="required">*</span>
              </label>
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
              <label htmlFor="">
                Select Your Dakhil Exam Year <span className="required">*</span>
              </label>
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
              <label>
                Facebook User URL <span className="required">if you have</span>
              </label>
              <input
                {...register("facebookUrl", { required: true })}
                placeholder="https://www.facebook.com/{userName}"
              />
            </div>
            <div>
              <label>
                Twitter User URL <span className="required">if you have</span>
              </label>
              <input
                {...register("twitter", { required: true })}
                placeholder="https://www.twitter.com/{userName}"
              />
            </div>
            <div>
              <label>
                Linkedin User URL <span className="required">if you have</span>
              </label>
              <input
                {...register("linkedin", { required: true })}
                placeholder="https://www.linkedin.com/{userName}"
              />
            </div>
            <div>
              <label>Current Status</label>
              <select {...register("status")}>
                <option defaultValue>select Current Status..</option>
                <option value="Working">Working</option>
                <option value="Retired">Retired</option>
                <option value="Student">Student</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label>
                Company or Institute name <span className="required">*</span>
              </label>
              <input
                {...register("place", { required: true })}
                placeholder="e.g Dhaka College / city bank "
              />
              {errors.place?.type === "required" && (
                <p className="errors">
                  {errors.place?.type === "required" &&
                    "Work Place name is required"}
                </p>
              )}
            </div>
            <div>
              <label>
                Title Of Your Position <span className="required">*</span>
              </label>
              <input
                {...register("position", { required: true })}
                placeholder="e.g Student / manager"
              />
              {errors.position?.type === "required" && (
                <p className="errors">
                  {errors.position?.type === "required" &&
                    "your work position is required"}
                </p>
              )}
            </div>
            <div>
              <label>Blood Group</label>
              <input {...register("blood")} placeholder="e.g A+ " />
            </div>
          </div>
          <div>
            <label>Comments / Questions:</label>
            <textarea rows="5" {...register("comments")} />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default UserRegistration;
