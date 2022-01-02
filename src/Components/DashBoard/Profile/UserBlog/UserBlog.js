import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import useAuth from "./../../../Hooks/useAuth";

const UserBlog = () => {
  const { user } = useAuth();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/userBlog?email=${user.email}`)
      .then(function (response) {
        // handle success
        setBlogs(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [user.email]);
  return (
    <div>
      <h1>{blogs.length}</h1>
    </div>
  );
};

export default UserBlog;
