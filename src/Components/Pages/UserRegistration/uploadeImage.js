import { useState } from "react";

const uploadImage = () => {
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
        console.log(data.url);
      })
      .catch((err) => console.log(err));
  };
  return {
    processFile,
  };
};
export default uploadImage;
