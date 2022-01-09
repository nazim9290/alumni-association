import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogEdit from "./BlogEdit";
import { useParams } from "react-router-dom";
import EditBlogs from "./EditBlogs";

const Edit = () => {
  const { blogId } = useParams();
  const [post, setpost] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/blog/${blogId}`)
      .then((res) => res.json())
      .then((data) => setpost(data));
  }, []);
  console.log(post);

  return (
    <>
      <h1>Edit your post</h1>
      <>
        <BlogEdit {...post} />
      </>
    </>
  );
};
export default Edit;
