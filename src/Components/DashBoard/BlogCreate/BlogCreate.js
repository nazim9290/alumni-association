import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import DraftDefaultConfig from "./Config";
import { Box, Container } from "@mui/material";
import "../../../../node_modules/draft-js/dist/Draft.css";
const axios = require("axios");

const BlogCreate = () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
  //   console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  const blogValue = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  const handledata = (e) => {
    const blogValue = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    e.preventDefault();
    axios
      .post("http://localhost:5000/blog", { blogValue })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function uploadImageCallBack(file) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.imgur.com/images/alumni");
      const data = new FormData();
      xhr.setRequestHeader("Authorization", "Client-ID 662b8dffad3451c");
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  }
  return (
    <Container sx={{ my: 10 }}>
      <form onSubmit={handledata}>
        <div
          style={{
            border: "1px solid #ccc",
            minHeight: 300,
            padding: 10,
          }}
        >
          <Editor
            {...DraftDefaultConfig}
            toolbarOnHidden
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={setEditorState}
            placeholder="Tell a story..."
            toolbar={{
              image: {
                uploadCallback: uploadImageCallBack,
                alt: { present: true, mandatory: false },
              },
            }}
          />
        </div>
        <input type="submit" />
      </form>
      <textarea
        className="textarea"
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      ></textarea>
      {/* <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={setEditorState}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      /> */}
    </Container>
  );
};

export default BlogCreate;
