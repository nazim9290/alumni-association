import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import useAuth from "./../../../Hooks/useAuth";
import Regex from "./../../../Shared/Regex/Regex";
import BlogComment from "./../../BlogDetails/BlogComment";
import LinkShare from "./../../Home/HomeBlog/LinkShare";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Blog = () => {
  const { posts } = useAuth();
  const [open, setOpen] = React.useState(false);
  const [openComment, setOpenComment] = React.useState(false);
  let navigate = useNavigate();

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
    <Box
      style={{
        backgroundImage:
          " linear-gradient(to right, #beccd4, #a9d6e4, #8ce0ec, #6debea, #54f4de)",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box component="h1" sx={{ flexGrow: 1, color: "#fff" }}>
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
            <Grid
              key={index}
              item
              xs={4}
              sm={4}
              md={4}
              data-aos="zoom-in-down"
              data-aos-duration="1000"
            >
              <Card sx={{ height: "100%" }}>
                <Box
                  onClick={() => {
                    handleBlogDetails(post._id);
                  }}
                >
                  <div
                    style={{
                      backgroundImage: `url("https://i.ibb.co/syvnGwG/260725833-2068174273330479-2675550629278720756-n.jpg")`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "300px",
                    }}
                  />
                  <CardContent>
                    <Box
                      elevation={3}
                      className="post-category"
                      sx={{
                        bgcolor: `${post?.category?.split(",")[1]}`,
                      }}
                    >
                      {post?.category?.split(",")[0]}
                    </Box>
                    <Typography
                      className="post-title"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {post.title}
                    </Typography>
                    <Typography className="post-description" variant="body2">
                      {Regex(post?.description)}

                      <Typography
                        component="span"
                        color="blue"
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          handleBlogDetails(post._id);
                        }}
                        size="medium"
                      >
                        ...See More
                      </Typography>
                    </Typography>

                    <Stack direction="row" alignItems="start" gap={1}>
                      <Avatar
                        alt={post?.writer?.name}
                        src={post?.writer?.img}
                      />
                      <Box sx={{ textalign: "left" }}>
                        <Typography variant="body1">
                          {post?.writer?.name}
                        </Typography>
                        <Typography color="text.secondary">
                          {post.date}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Box>
                <CardActions>
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
                    <StyledBadge
                      badgeContent={0}
                      color="secondary"
                    ></StyledBadge>

                    <RemoveRedEyeIcon />
                  </IconButton>
                  <IconButton onClick={handleClickOpen} aria-label="share">
                    <StyledBadge badgeContent={0} color="secondary">
                      <ShareIcon />
                    </StyledBadge>
                  </IconButton>
                </CardActions>
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
    </Box>
  );
};

export default Blog;
