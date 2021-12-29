import React, { useState } from "react";

const UserForm = () => {
  const [data, setData] = useState({
    name: "",
    picture: "",
  });
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append("picture", data.picture);
      formData.append("name", data.name);
      console.log(formData);
      const res = await fetch(`http://localhost:5000/xStudent`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setData({ name: "", picture: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter name"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange("name")}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="picture"
          onChange={handleChange("picture")}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserForm;
