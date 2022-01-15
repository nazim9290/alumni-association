import React, { useState } from "react";
import { Button, TextField, Stack } from "@mui/material";
import useAuth from "./../../Hooks/useAuth";
import SweetAlert from "./../../Shared/SweetAlert/SweetAlert";

const designations = [
  ["1", "সভাপতি"],
  ["2", "সিনিয়র সহ-সভাপতি"],
  ["3", "সহ-সভাপতি"],
  ["4", "সাধারণ-সম্পাদক"],
  ["5", "যুগ্ন সাধারন সম্পাদক"],
  ["6", "সাংগঠনিক সম্পাদক"],
  ["7", "কোষাধ্যক্ষ"],
  ["8", "সহ-কোষাধক্ষ্য"],
  ["9", "প্রচার সম্পাদক"],
  ["10", "আন্তর্জাতিক বিষয়ক সম্পাদক"],
  ["11", "সাহিত্য ও প্রকাশনা সম্পাদক"],
  ["12", "সাংস্কৃতিক ও জনসংযোগ সম্পাদক"],
  ["13", "তথ্যপ্রযুক্তি, গবেষনা উন্নয়ন বিষয়ক সম্পাদক"],
  ["14", "শিক্ষা, ক্রীড়া ও পাঠাগার সম্পাদক"],
  ["15", "দপ্তর সম্পাদক"],
  ["16", "কার্যকরী কমিটির সদস্য"],
];
const AddCommittee = () => {
  const { token } = useAuth();
  const [userInfo, setUserInfo] = useState({
    email: "",
    designation: "",
  });
  const onChangeValue = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleAdminSubmit = (e) => {
    const designation = {
      email: userInfo.email,
      designation: userInfo.designation.split(",")[1],
      designationId: userInfo.designation[0],
    };
    console.log(designation);
    fetch("https://calm-escarpment-64359.herokuapp.com/designation", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(designation),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          SweetAlert("Designation Add Successfully !!!");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h1>Add Committee</h1>
      <form onSubmit={handleAdminSubmit}>
        <Stack spacing={3} sx={{ width: "75%", mx: "auto" }}>
          <TextField
            label="Email"
            type="email"
            name="email"
            onChange={onChangeValue}
            variant="standard"
            fullWidth
            value={userInfo.email}
            placeholder="email"
            required
          />
          <select
            label="Designation"
            type="text"
            name="designation"
            onChange={onChangeValue}
            variant="standard"
            value={userInfo.designation}
            placeholder="designation"
            required
            fullWidth
          >
            <option>--Select Designation--</option>
            {designations.map((d) => (
              <option key={d[0]} value={d}>
                {d[1]}
              </option>
            ))}
          </select>
          <Button type="submit" variant="contained">
            Make Admin
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default AddCommittee;
