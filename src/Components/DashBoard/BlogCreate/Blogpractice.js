import React, { useEffect, useState } from "react";
import convertFromHTML from "draft-js";
import { convertToRaw } from "draft-js";
const axios = require("axios").default;

const Blogpractice = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/blog")
      .then(function (response) {
        // handle success
        setBlog(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div>
      {blog.map((bl) => (
        <div>
          `<h1>{bl.blogValue}</h1>`
        </div>
      ))}
    </div>
  );
};

export default Blogpractice;
