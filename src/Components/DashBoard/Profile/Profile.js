import { Container, Paper, Typography, Grid, Avatar, Box } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";
import useAuth from "./../../Hooks/useAuth";
import UserBlog from "./UserBlog/UserBlog";

export default function App() {
  const { user, upload } = useAuth();
  const [quote, setQuote] = useState({});
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  );

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  function handleClick() {
    upload(photo, user, setLoading);
  }

  useEffect(() => {
    axios.get("https://type.fit/api/quotes").then((res) => {
      setQuote(res.data[Math.floor(Math.random() * res.data.length)]);
    });
  }, []);

  return (
    <Container className="profile" maxWidth="xl" sx={{ my: 1 }}>
      <Paper className="effect effect-c" elevation={3}>
        <Typography className="effect__heading">“{quote.text}”</Typography>
        <Typography className="effect__subheading">
          __ {quote.author ? quote.author : "Anonymous"} __
        </Typography>
      </Paper>
      <br />
      <Paper elevation={3}>
        <Grid container sx={{ p: 5 }}>
          <Grid item xs={4}>
            <Avatar sx={{ width: 100, height: 100, mt: 5, ml: 5 }}>
              {user.photoURL === null ? (
                `${user.displayName.split(" ")[0][0]}${
                  user.displayName.split(" ")[1][0]
                }`
              ) : (
                <img src={user?.photoURL} alt="" />
              )}
            </Avatar>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ mt: 5 }}>
              <Typography variant="h6">
                <b>Name:</b> {user.displayName}
              </Typography>
              <Typography variant="h6">
                <b>Email:</b> {user.email}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <input type="file" onChange={handleChange} />
            <button disabled={loading || !photo} onClick={handleClick}>
              Upload
            </button>
          </Grid>
        </Grid>
      </Paper>
      <UserBlog />
    </Container>
  );
}
