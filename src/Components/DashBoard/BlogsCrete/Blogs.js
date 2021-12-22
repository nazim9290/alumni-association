import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Blogs.css";

function Blogs() {
  const [ispost, setpost] = useState([]);
  useEffect(() => {
    axios
      .get("https://calm-escarpment-64359.herokuapp.com/blog")
      .then(function (response) {
        // handle success
        setpost(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  console.log("hello");

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1>
            {" "}
            React <span> wysiwyg </span> text editor{" "}
          </h1>

          {ispost.map((item, index) => (
            <div className="post__list" key={index}>
              <h2>{item.title}</h2>

              <div
                className="post__description"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />

              <Link to={`/blogEdit/${item._id}`} className="btn btn__theme">
                {" "}
                Edit{" "}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
