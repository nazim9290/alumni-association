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
import { Container } from "@mui/material";
import uploadImageCallBack from "./ImageHandle";

function BlogsAdd() {
  const { user } = useAuth();
  let naviagate = useNavigate();
  const [userInfo, setuserInfo] = useState({
    title: "",
    category: "",
  });
  const nowDate = NowDate();
  // console.log(nowDate);
  // console.log(user);
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  };

  const [isError, setError] = useState(null);
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
          category: userInfo.category,
          categoryColor:"",
          writer: {
            email: user.email,
            name: user.displayName,
            img: user.photoURL,
          },
          date: nowDate,
        })
        .then((res) => {
          if (res.data.success === true) {
            naviagate("/");
          }
        });
    } catch (error) {
      throw error;
    }
  };
  return (
    <Container sx={{ my: 5 }} className="blogs">
      <div className="">
        <div className="">
          <div className="row">
            <form onSubmit={addDetails} className="update__forms">
              <h1 className="myaccount-content"> Add Your Content </h1>
              <div className="form-row">
                <div className="form-group col-md-12">
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
                <div className="form-group col-md-12">
                  <label className="font-weight-bold">
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
                    <option defaultValue="">
                      --Please choose a Category--
                    </option>
                    {categorys.map((category, i) => (
                      <option key={i} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group col-md-12 editor">
                  <label className="font-weight-bold">
                    {" "}
                    Description <span className="required"> * </span>{" "}
                  </label>
                  <Editor
                    editorState={description}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onEditorStateChange}
                    toolbar={{
                      image: {
                        uploadCallback: uploadImageCallBack,
                        alt: { present: true, mandatory: false },
                      },
                    }}
                  />
                  <textarea
                    style={{ display: "none" }}
                    disabled
                    ref={(val) => (userInfo.description = val)}
                    value={draftToHtml(
                      convertToRaw(description.getCurrentContent())
                    )}
                  />
                </div>
                {isError !== null && <div className="errors"> {isError} </div>}
                <div className="form-group col-sm-12 text-right">
                  <button type="submit" className="btn btn__theme">
                    {" "}
                    Submit{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default BlogsAdd;
