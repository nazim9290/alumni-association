import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

const UserRegistration = () => {
  const [years, setYears] = useState([]);
  const [imageSource, setImageSource] = useState("");

  const onFileSelected = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e) => setImageSource(e.target.result);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
        {imageSource ? (
          <img
            alt="preview"
            style={{ height: "100px", width: "100px" }}
            src={imageSource}
          />
        ) : null}
        <form onSubmit={handleSubmit(onSubmit)}>
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
              <label>Upload Your Image</label>
              <input
                type="file"
                {...register("picture", {
                  validate: {
                    lessThan10MB: (files) =>
                      files[0]?.size < 1024 * 1024 || "Max 1MB",
                    acceptedFormats: (files) => {
                      const pictureType = files[0]?.name
                        .toLowerCase()
                        .split(".")
                        .pop();
                      return (
                        ["jpeg", "png", "gif"].includes(pictureType) ||
                        "Only PNG, JPEG e GIF"
                      );
                    },
                  },
                })}
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
              <label>
                Which of the following is/are your preferred contact method(s)?*
              </label>
              <select {...register("contact")}>
                <option defaultValue>select preferred Contact</option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
                <option value="facebook">Facebook</option>
                <option value="other">Do not wish to be contacted</option>
              </select>
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
              <label>Blood Group</label>
              <input {...register("blood")} placeholder="e.g A+ " />
            </div>
          </div>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default UserRegistration;
