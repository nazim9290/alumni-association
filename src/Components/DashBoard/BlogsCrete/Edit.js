import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogEdit from "./BlogEdit";
import { useParams } from "react-router-dom";
import EditBlogs from "./EditBlogs";

const Edit = () => {
  const { blogId } = useParams();
  const [ispost, setpost] = useState({});
  useEffect(() => {
    fetch(`https://calm-escarpment-64359.herokuapp.com/blog/${blogId}`)
      .then((res) => res.json())
      .then((data) => setpost(data));
  }, []);
  console.log(ispost);

  return (
    <>
      <h1>Edit your post</h1>
      <>
        {/* <EditBlogs {...ispost} /> */}
        <BlogEdit {...ispost} />
      </>
    </>
  );
};
export default Edit;
