import React, { useState } from "react";
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
import BlogComment from "./BlogComment";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const BlogDetails = () => {
  const { blogId } = useParams();
  const [open, setOpen] = React.useState(false);
  const [openComment, setOpenComment] = React.useState(false);

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

  return (
    <div>
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
              বিষাদের সুরে প্রিয় শিক্ষকের বিদায় সংবর্ধনা
            </Typography>
            <Typography sx={{ mb: 1 }} variant="body2" color="text.secondary">
              মো: গোলাম মোস্তাফা। রাজধানীর ভাটারা থানার খিলবাড়ী টেক এলাকার হাজী
              মাদবর আলী হাচানিয়া দাখিল মাদরাসায় শিক্ষকতা করছেন প্রায় ২৬ বছর।
              মাদ্রাসাটির সহকারি সুপারিনটেনডেন্টের দায়িত্বে থাকা এই শিক্ষক
              সম্প্রতি রাজধানীর খিলক্ষেত ইসলামিয়া দাখিল মাদ্রাসায়
              সুপারিনটেনডেন্ট হিসেবে নিয়োগ পেয়েছেন। তবে বিষয়টি আনন্দের হলেও
              বিষাদের ছায়া নেমেছে হাজী মাদবর আলী হাচানিয়া দাখিল মাদরাসায়। প্রিয়
              শিক্ষকের বিদায়ে অশ্রুসিক্ত দীর্ঘ সময়ের সহকর্মী, সাবেক ও বর্তমান
              শিক্ষার্থী এবং শিক্ষাপ্রতিষ্ঠান সংশ্লিষ্টরা।
            </Typography>

            <Stack direction="row" alignItems="center" gap={1}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="body1">Nazim</Typography>
                <Typography color="text.secondary">
                  22 september 2000
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
