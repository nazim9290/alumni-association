import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useAuth from "./../../Hooks/useAuth";
import SweetAlert from "../SweetAlert/SweetAlert";

export default function ResetPassword({ handleClickOpen, handleClose, open }) {
  const [email, setEmail] = React.useState("");
  const { forgotPassword } = useAuth();

  const handleSubmit = () => {
    console.log(email);
    if (email) {
      forgotPassword(email);
      handleClose();
      SweetAlert("See Your Email Inbox and Reset Your Password");
    } else {
      handleClose();
      SweetAlert("You Don't Submit Your Email", "error");
    }
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogContent>
          <DialogContentText color="red">
            Enter your Email . And Check Your Email Inbox . Send Link For Reset
            Your Password
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Reset Password Link</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
