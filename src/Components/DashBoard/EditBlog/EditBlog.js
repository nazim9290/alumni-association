import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogEdit from "./BlogEdit";

const EditBlog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    fetch(`https://calm-escarpment-64359.herokuapp.com/blog/${blogId}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div>
      <BlogEdit {...blog} />
    </div>
  );
};

export default EditBlog;
