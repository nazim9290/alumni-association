import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
const BlogComment = ({ openComment, handleCloseComment }) => {
  const { user } = "nazim";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Dialog
      open={openComment}
      onClose={handleCloseComment}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Leave a Comment"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} defaultValue={""} />
            <br />
            <textarea {...register("lastName")} defaultValue={""} />
            <br />
            <input type="submit" />
          </form>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseComment}>Disagree</Button>
        <Button onClick={handleCloseComment} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BlogComment;
