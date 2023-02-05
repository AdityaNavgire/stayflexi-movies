import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";

const CustomTypography = styled(Typography)({
  " &.MuiTypography-root": {
    fontSize: "24px",
    fontWeight: 400,
    width: "300px",
    color: "black",
    //   marginTop: "20px",
  },
});
export default function ResponsiveDialog({
  open,
  setOpen,
  image,
  title,
  year,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    console.log("cle");
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid style={{ width: "100%" }}>
              <img src={image} alt="" />
              <CustomTypography>Title: {title}</CustomTypography>
              <CustomTypography>Year released: {year}</CustomTypography>
              <CustomTypography>Movie Details: N/A</CustomTypography>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
