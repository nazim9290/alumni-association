function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
    xhr.open("POST", `https://api.cloudinary.com/v1_1/dpakfnqvn/image/upload`);

    const data = new FormData();
    //   xhr.setRequestHeader("Authorization", "Client-ID 55a0466cba8b975");
    data.append("upload-preset", "alumni");
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
export default uploadImageCallBack;
