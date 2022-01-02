// function uploadImageCallBack(file) {
//   return new Promise((resolve, reject) => {
//     var xhr = new XMLHttpRequest();
//     xhr.open(
//       "POST",
//       "https://api.imgbb.com/1/upload?keyf31256e1071e11c874522934fbb16ac9",
//       true
//     );
//     const data = new FormData();
//     data.append("image", file);
//     xhr.send(data);
//     xhr.addEventListener("load", () => {
//       const response = JSON.parse(xhr.responseText);
//       resolve(response);
//     });
//     xhr.addEventListener("error", () => {
//       const error = JSON.parse(xhr.responseText);
//       reject(error);
//     });
//   });
// }
// export default uploadImageCallBack;
// const uploadImageCallBack = (file) => {
//   const url =
//     "https://api.imgbb.com/1/upload?keyf31256e1071e11c874522934fbb16ac9";

//   let xhr = new XMLHttpRequest();

//   let fd = new FormData();
//   fd.append("image", file);
//   xhr.open("POST", url, true);
//   xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
//   // Update progress (can be used to show progress indicator)
//   /* xhr.upload.addEventListener("progress", function (e) {
//       updateProgress(i, (e.loaded * 100.0) / e.total || 100);
//     }); */
//   xhr.addEventListener("readystatechange", function (e) {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       //updateProgress(i, 100); // <- Add this
//       //console.log(xhr.responseText);
//     } else if (xhr.readyState === 4 && xhr.status !== 200) {
//       // Error. Inform the user
//     }
//   });

//   xhr.open("POST", url, true);

//   xhr.send(fd);
// };
// export default uploadImageCallBack;
