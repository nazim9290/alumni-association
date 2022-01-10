import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Blogs.css";
import NowDate from "./NowDate";
import categorys from "./useCategory";
import useAuth from "./../../Hooks/useAuth";
import { Box } from "@mui/material";
import Swal from "sweetalert2";
import Config from "./Config";
import SweetAlert from "./../../Shared/SweetAlert/SweetAlert";

function BlogsAdd() {
  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  };

  const [isError, setError] = useState(null);
  const { user } = useAuth();
  const [url, setUrl] = useState("");
  let navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    title: "",
    category: "",
  });
  const [success, setSuccess] = useState(false);
  const onChangeValue = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const nowDate = NowDate();

  const processFile = (e) => {
    var image = e.target.files[0];
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "Image_Blog");
    data.append("cloud_name", "dpakfnqvn");
    fetch("https://api.cloudinary.com/v1_1/dpakfnqvn/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  const addDetails = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      if (userInfo.description.value.length < 10) {
        setError("Required, Add description Minimum length 10 characters");
        return;
      }
      axios
        .post(`https://calm-escarpment-64359.herokuapp.com/blog`, {
          title: userInfo.title,
          description: userInfo.description.value,
          category: userInfo.category[0],
          categoryColor: userInfo.category[1],
          img: url,
          writer: {
            email: user.email,
            name: user.displayName,
            img: user.photoURL,
          },
          date: nowDate,
        })
        .then((res) => {
          if (res.data.insertedId) {
            setSuccess(SweetAlert("Your Post has been saved"));
            navigate("/dashboard");
          }
        });
    } catch (error) {
      throw error;
    }
  };
  return (
    <Box className="blogs">
      <form onSubmit={addDetails} className="update__forms">
        <h1 className="myaccount-content"> Add Your Content </h1>
        <div className="form-row">
          <label className="font-weight-bold">
            {" "}
            Content Title <span className="required"> * </span>{" "}
          </label>
          <input
            type="text"
            name="title"
            value={userInfo.title}
            onChange={onChangeValue}
            className="form-control"
            placeholder="Title"
            required
          />
        </div>
        <div className="form-row">
          <label className="font-weight-bold">
            {" "}
            Blogs Title Image <span className="required">
              {" "}
              (if you want){" "}
            </span>{" "}
          </label>
          <input
            type="file"
            name="image"
            onChange={processFile}
            className="form-control"
            placeholder="Title image"
          />
        </div>
        <div className="form-group">
          <label>
            {" "}
            Category <span className="required"> * </span>{" "}
          </label>
          <select
            type="text"
            name="category"
            value={userInfo.category}
            onChange={onChangeValue}
            className="form-control"
            placeholder="category"
            required
          >
            <option defaultValue="">--Please choose a Category--</option>
            {categorys.map((category, i) => (
              <option key={i} value={category}>
                {category[0]}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group editor">
          <label className="font-weight-bold">
            {" "}
            Description <span className="required"> * </span>{" "}
          </label>
          <Box className="">
            <Editor
              {...Config}
              editorState={description}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
              toolbar={
                {
                  // image: {
                  //   uploadCallback: uploadImageCallBack,
                  //   alt: { present: true, mandatory: false },
                  // },
                }
              }
            />
          </Box>
          <textarea
            style={{ display: "none" }}
            disabled
            ref={(val) => (userInfo.description = val)}
            value={draftToHtml(convertToRaw(description.getCurrentContent()))}
          />
        </div>
        {isError !== null && <div className="errors"> {isError} </div>}
        <div className="form-group">
          <button type="submit" className="btn btn__theme">
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </Box>
  );
}
export default BlogsAdd;
