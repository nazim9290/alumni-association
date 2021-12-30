import React, { useEffect, useState } from "react";
import sanitizeHtml from "sanitize-html";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
import { useParams } from "react-router-dom";
import LinkShare from "./../Home/HomeBlog/LinkShare";
import { Helmet } from "react-helmet";
import BlogComment from "./BlogComment";
import "./BlogDetails.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const BlogDetails = () => {
  const [blogDescription, setBlogDescription] = useState({});
  const { blogId } = useParams();
  const [open, setOpen] = React.useState(false);
  const [openComment, setOpenComment] = React.useState(false);

  const url = window.location.href;

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
  useEffect(() => {
    fetch(`https://calm-escarpment-64359.herokuapp.com/blog/${blogId}`)
      .then((res) => res.json())
      .then((data) => setBlogDescription(data));
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"hello"}</title>
        <link rel="canonical" href={url} />
      </Helmet>
      <Container sx={{ my: 5 }}>
        <Card>
          <CardMedia
            style={{ height: "100%", width: "75%", margin: "auto auto" }}
            component="img"
            alt="green iguana"
            image="http://nmphsaabd.org/wp-content/uploads/2020/07/blog1.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {blogDescription.title}
            </Typography>
            <Typography
              sx={{ mb: 1 }}
              variant="body2"
              className="blog-description"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(blogDescription?.description, {
                  allowedTags: sanitizeHtml.defaults.allowedTags.concat([
                    "img",
                  ]),
                }),
              }}
            ></Typography>

            <Stack direction="row" alignItems="center" gap={1}>
              <Avatar
                alt={blogDescription?.writer?.name}
                src={blogDescription?.writer?.img}
              />
              <Box sx={{ textalign: "left" }}>
                <Typography variant="body1">
                  {blogDescription?.writer?.name}
                </Typography>
                <Typography color="text.secondary">
                  {blogDescription?.date}
                </Typography>
              </Box>
            </Stack>
          </CardContent>
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
              <StyledBadge badgeContent={0} color="secondary"></StyledBadge>

              <RemoveRedEyeIcon />
            </IconButton>
            <IconButton onClick={handleClickOpen} aria-label="share">
              <StyledBadge badgeContent={0} color="secondary">
                <ShareIcon />
              </StyledBadge>
            </IconButton>
          </CardActions>
        </Card>
        <LinkShare handleClose={handleClose} open={open} />
        <BlogComment
          handleCloseComment={handleCloseComment}
          openComment={openComment}
        />
      </Container>
    </div>
  );
};

export default BlogDetails;
