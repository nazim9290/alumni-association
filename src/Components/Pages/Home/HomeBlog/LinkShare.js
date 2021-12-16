import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import Stack from "@mui/material/Stack";

const LinkShare = ({ handleClose, open }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Share your favarit social site?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Stack direction="row" alignItems="center" gap={1}>
            <FacebookShareButton
              url={"https://hasania-alumni-association.web.app/"}
              quote={"フェイスブックはタイトルが付けれるようです"}
              hashtag={"#hashtag"}
              description={"aiueo"}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon onClick={handleClose} size={32} round />
            </FacebookShareButton>
            <br />
            <TwitterShareButton
              title={"test"}
              url={"https://peing.net/ja/"}
              hashtags={["hashtag1", "hashtag2"]}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </Stack>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LinkShare;
