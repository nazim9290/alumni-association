function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://api.cloudinary.com/v1_1/dpakfnqvnimage/upload",
      true
    );
    const data = new FormData();
    data.append("file", file);
    data.append("cloud_name", "dpakfnqvn");
    data.append("upload_preset", "alumni");

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
export default uploadImageCallBack;
