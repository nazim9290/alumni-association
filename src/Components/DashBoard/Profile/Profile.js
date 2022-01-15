import {
  Avatar,
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./../../Hooks/useAuth";
import "./Profile.css";
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
    <Container>
      <Typography maxWidth="xl" sx={{ my: 1 }}>
        <Paper elevation={3} sx={{ p: 5 }}>
          <Typography>“{quote.text}”</Typography>
          <Typography>
            __ {quote.author ? quote.author : "Anonymous"} __
          </Typography>
        </Paper>
        <br />
        <Paper elevation={3}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            sx={{ p: 5 }}
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
          >
            <Avatar sx={{ width: 100, height: 100, mt: 5, ml: 5 }}>
              {user.photoURL === null ? (
                `${user.displayName.split(" ")[0][0]}${
                  user.displayName.split(" ")[1][0]
                }`
              ) : (
                <img src={user?.photoURL} alt="" />
              )}
            </Avatar>

            <Box sx={{ textAlign: "start" }}>
              <Typography variant="h6">
                <b>Name:</b> {user.displayName}
              </Typography>
              <Typography variant="h6">
                <b>Email:</b> {user.email}
              </Typography>
            </Box>

            <input type="file" onChange={handleChange} />
            <button disabled={loading || !photo} onClick={handleClick}>
              Upload
            </button>
          </Stack>
        </Paper>
        <UserBlog />
      </Typography>
    </Container>
  );
}
