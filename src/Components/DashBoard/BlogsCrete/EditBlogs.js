// import React from "react";

// const EditBlogs = ({ ...blog }) => {
//   console.log(blog);
//   return (
//     <div className="App">
//       <div className="container">
//         <div className="row">
//           <form onSubmit={PoemAddbooks} className="update__forms">
//             <h3 className="myaccount-content"> Edit </h3>
//             <div className="form-row">
//               <div className="form-group col-md-12">
//                 <label className="font-weight-bold">
//                   {" "}
//                   Title <span className="required"> * </span>{" "}
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={userInfo.title}
//                   onChange={onChangeValue}
//                   className="form-control"
//                   placeholder="Title"
//                   required
//                 />
//               </div>
//               <div className="form-group col-md-12 editor">
//                 <label className="font-weight-bold">
//                   {" "}
//                   Description <span className="required"> * </span>{" "}
//                 </label>
//                 <Editor
//                   editorState={description}
//                   toolbarClassName="toolbarClassName"
//                   wrapperClassName="wrapperClassName"
//                   editorClassName="editorClassName"
//                   onEditorStateChange={onEditorStateChange}
//                 />
//                 <textarea
//                   style={{ display: "none" }}
//                   disabled
//                   ref={(val) => (userInfo.description = val)}
//                   value={draftToHtml(
//                     convertToRaw(description.getCurrentContent())
//                   )}
//                 />
//               </div>
//               {isError !== null && <div className="errors"> {isError} </div>}
//               <div className="form-group col-sm-12 text-right">
//                 <button type="submit" className="btn btn__theme">
//                   {" "}
//                   Submit{" "}
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditBlogs;
