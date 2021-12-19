import React, { useEffect, useState } from "react";
import axios from "axios";
import { convertToRaw } from "draft-js";
export default function useSubmit() {
  const submitPage = async (data) => {
    const content = JSON.stringify(convertToRaw(data));

    return axios
      .post("/posts", {
        content,
      })
      .catch((err) => console.log(err));
  };
  return {
    submitPage,
  };
}
