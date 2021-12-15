import React from "react";

const styles = {
  color: "#fff",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "40px",
  fontWeight: "900",
};

const CarouselImg = ({ data }) => {
  return (
    <div>
      <img src={data.img} alt="" />
      <h1 style={styles}>{data.title}</h1>
    </div>
  );
};

export default CarouselImg;
