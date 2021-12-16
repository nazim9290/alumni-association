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
import { useNavigate } from "react-router-dom";
import LinkShare from "./../../Home/HomeBlog/LinkShare";
import BlogComment from "./../../BlogDetails/BlogComment";

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
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  style={{ height: "", width: "100%" }}
                  alt="green iguana"
                  objectFit="cover"
                  objectPosition="center"
                  image="https://scontent.fkix2-2.fna.fbcdn.net/v/t39.30808-6/p526x296/260725833_2068174273330479_2675550629278720756_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=825194&_nc_eui2=AeEwZLAtikNJhqb_pu_IMr2QCxfJIMSWyrgLF8kgxJbKuP3_E3JL_mBny3c7nbYzXJQltF9cMzw6psYDJ7ivn-F7&_nc_ohc=Af2g4gaMjTQAX8RCd_i&_nc_ht=scontent.fkix2-2.fna&oh=00_AT9TaBoBxcafNuZLYjtnsIQtSZqx0cjGw4P2jk7552Pr6A&oe=61BF60AB"
                />
                <CardContent>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 1,
                      width: "50%",
                      bgcolor: "#8e44ad",
                      color: "#f8f8f8",
                      position: "relative",
                      top: "-50px",
                      left: "50%",
                    }}
                  >
                    Technology
                  </Paper>
                  <Typography gutterBottom variant="h5" component="div">
                    বিষাদের সুরে প্রিয় শিক্ষকের বিদায় সংবর্ধনা
                  </Typography>
                  <Typography
                    sx={{ mb: 1 }}
                    variant="body2"
                    color="text.secondary"
                  >
                    মো: গোলাম মোস্তাফা। রাজধানীর ভাটারা থানার খিলবাড়ী টেক এলাকার
                    হাজী মাদবর আলী হাচানিয়া দাখিল মাদরাসায় শিক্ষকতা করছেন প্রায়
                    ২৬ বছর। মাদ্রাসাটির সহকারি সুপারিনটেনডেন্টের দায়িত্বে থাকা
                    এই শিক্ষক সম্প্রতি রাজধানীর খিলক্ষেত ইসলামিয়া দাখিল
                    মাদ্রাসায় সুপারিনটেনডেন্ট হিসেবে নিয়োগ পেয়েছেন। তবে বিষয়টি
                    আনন্দের হলেও বিষাদের ছায়া নেমেছে হাজী মাদবর আলী হাচানিয়া
                    দাখিল মাদরাসায়। প্রিয় শিক্ষকের বিদায়ে অশ্রুসিক্ত দীর্ঘ সময়ের
                    সহকর্মী, সাবেক ও বর্তমান শিক্ষার্থী এবং শিক্ষাপ্রতিষ্ঠান
                    সংশ্লিষ্টরা।
                  </Typography>

                  <Stack direction="row" alignItems="center" gap={1}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
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
                  <Button
                    onClick={() => {
                      handleBlogDetails(index);
                    }}
                    size="large"
                  >
                    See More
                  </Button>
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
    </div>
  );
};

export default Blog;
