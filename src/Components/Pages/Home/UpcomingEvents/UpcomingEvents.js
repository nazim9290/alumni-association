import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Countdown from "../../../Shared/Countdwon/Countdwon";
import "./Upcoming.css";
import axios from "axios";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://calm-escarpment-64359.herokuapp.com/event")
      .then(function (res) {
        setEvents(res.data);
      })
      .catch(function (err) {
        console.log(err);
      })
      .then(function () {});
  }, []);
  return (
    <div>
      {events.slice(-1).map((event) => (
        <Grid
          key={event._id}
          container
          spacing={1}
          sx={{ boxShadow: 3, my: 5, p: 4, bgcolor: "#e0f2f1" }}
        >
          <Grid item xs={12} md={6}>
            <img src={event.image} alt="" width="100%" height="300px" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={9} md={10}>
                <div className="event-title">
                  <h1>UPCOMING EVENT</h1>
                  <h2>{event.title}</h2>
                </div>
              </Grid>
              <Grid item xs={3} md={2}>
                <div className="event-date">
                  <h1>{event.date.split(" ")[1]}</h1>

                  <h5>{event.date.split(" ")[0]}</h5>
                  <p>{event.date.split(" ")[2]}</p>
                </div>
              </Grid>

              {/*  */}
              <Grid container sx={{ my: 2 }}>
                <Stack
                  direction={{ xs: "row", sm: "row" }}
                  justifyContent="space-evenly"
                  alignItems="center"
                  spacing={2}
                >
                  <Typography component="div">
                    <Countdown date={event.date} time={event.time} />
                  </Typography>

                  <Button
                    className="join-btn"
                    color="warning"
                    variant="contained"
                  >
                    Join Now
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default UpcomingEvents;
