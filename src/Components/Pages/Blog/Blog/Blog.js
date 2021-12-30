import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./Blog.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import LinkShare from "./../../Home/HomeBlog/LinkShare";
import BlogComment from "./../../BlogDetails/BlogComment";
import axios from "axios";
import Regex from "./Regex";
import useAuth from "./../../../Hooks/useAuth";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Blog = () => {
  const [open, setOpen] = React.useState(false);
  const [openComment, setOpenComment] = React.useState(false);
  const navigate = useNavigate();
  const { posts } = useAuth();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenComment = () => {
    setOpenComment(true);
  };

  const handleCloseComment = () => {
    setOpenComment(false);
  };
  const handleBlogDetails = (id) => {
    navigate(`/Blog/${id}`);
  };
  return (
    <div
      style={{
        backgroundImage:
          " linear-gradient(to right, #beccd4, #a9d6e4, #8ce0ec, #6debea, #54f4de)",
      }}
    >
      <Container>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box component="h1" sx={{ flexGrow: 1, color: "black" }}>
            Blog And News on Campus
          </Box>
        </Box>
        <Grid
          container
          sx={{ py: 5 }}
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {posts.map((post, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  style={{ height: "", width: "100%" }}
                  alt="green iguana"
                  objectfit="cover"
                  objectposition="center"
                  image={
                    post.img
                      ? `${post.img}`
                      : "https://i.ibb.co/mH4ntN4/pnm2.jpg"
                  }
                />
                <CardContent>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 0.5,
                      width: "50%",
                      bgcolor: "#8e44ad",
                      color: "#f8f8f8",
                      position: "relative",
                      top: "-30px",
                      left: "25%",
                    }}
                  >
                    {post.category}
                  </Paper>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography
                    sx={{ height: "150px" }}
                    className="post-description"
                    variant="body2"
                    color="text.secondary"
                  >
                    {Regex(post?.description)}

                    {/* <div
                      className="post__description"
                      dangerouslySetInnerHTML={{
                        __html: post?.description?.slice(0, 200),
                      }}
                    /> */}
                    <br />
                    <Button
                      onClick={() => {
                        handleBlogDetails(post._id);
                      }}
                      size="medium"
                    >
                      See More
                    </Button>
                  </Typography>

                  <Stack direction="row" alignItems="center" gap={1}>
                    <Avatar alt={post?.writer?.name} src={post?.writer?.img} />
                    <Box sx={{ textalign: "left" }}>
                      <Typography variant="body1">
                        {post?.writer?.name}
                      </Typography>
                      <Typography color="text.secondary">
                        {post?.date}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>

                <IconButton aria-label="add to favorites">
                  <StyledBadge badgeContent={0} color="secondary">
                    <FavoriteIcon />
                  </StyledBadge>
                </IconButton>

                <IconButton
                  onClick={handleClickOpenComment}
                  aria-label="InsertCommentIcon"
                >
                  <StyledBadge badgeContent={0} color="secondary">
                    <InsertCommentIcon />
                  </StyledBadge>
                </IconButton>
                <IconButton aria-label="RemoveRedEyeIcon">
                  <StyledBadge badgeContent={0} color="secondary"></StyledBadge>

                  <RemoveRedEyeIcon />
                </IconButton>
                <IconButton onClick={handleClickOpen} aria-label="share">
                  <StyledBadge badgeContent={0} color="secondary">
                    <ShareIcon />
                  </StyledBadge>
                </IconButton>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <LinkShare handleClose={handleClose} open={open} />
      <BlogComment
        handleCloseComment={handleCloseComment}
        openComment={openComment}
      />
    </div>
  );
};

export default Blog;
