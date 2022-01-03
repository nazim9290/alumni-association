import { Box, Button, Container, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import "./Events.css";
import axios from "axios";

const AddEvent = () => {
  const [image, setImage] = useState("");
  const [eventInfo, setEventInfo] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
  });
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
        setImage(data.url);
      })
      .catch((err) => console.log(err));
  };

  const onChangeValue = (e) => {
    setEventInfo({
      ...eventInfo,
      [e.target.name]: e.target.value,
    });
  };

  const eventSubmit = (e) => {
    e.preventDefault();

    var eventData = {
      title: eventInfo.title,
      image: image,
      description: eventInfo.description,
      date: eventInfo.date,
      time: eventInfo.time,
    };
    axios
      .post("https://calm-escarpment-64359.herokuapp.com/event", eventData)
      .then(function (res) {
        console.log(res);
        if (res.data.insertedId) {
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Container>
      <form onSubmit={eventSubmit}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <TextField
            id="outlined-multiline-static"
            label="Add Event Title"
            type="Text"
            name="title"
            value={eventInfo.title}
            onChange={onChangeValue}
            multiline
            placeholder="Event Title"
            fullWidth
          />
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Box>
              <label>Event date:</label>
              <input
                type="date"
                name="date"
                value={eventInfo.date}
                onChange={onChangeValue}
                placeholder="Event Date"
              />
            </Box>
            <Box>
              <label>Event :</label>
              <input
                type="time"
                name="time"
                value={eventInfo.time}
                onChange={onChangeValue}
                placeholder="Event Time"
              />
            </Box>
          </Stack>

          <Box>
            <label htmlFor="contained-button-file">
              <input
                accept="image/*"
                id="contained-button-file"
                type="file"
                onChange={processFile}
                name="image"
              />
            </label>
          </Box>

          <TextField
            id="outlined-multiline-static"
            label="Write Event Description"
            name="description"
            value={eventInfo.description}
            onChange={onChangeValue}
            multiline
            rows={6}
            placeholder="Write Event Description"
            fullWidth
          />
          <Button type="submit" variant="contained" size="large">
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default AddEvent;
