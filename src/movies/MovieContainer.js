import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MoviesPopUp from "./MoviesPopUp";

const MovieContainer = ({ image, title, year }) => {
  const [open, setOpen] = useState(false);
  console.log(open, "opne");
  return (
    <>
      <Grid
        container
        style={{ width: "250px", cursor: "pointer" }}
        onClick={() => setOpen(true)}
      >
        <Card
          sx={{ width: 250, height: 250, backgroundImage: `url(${image})` }}
        >
          <CardMedia sx={{ height: 150 }} />
          <CardContent></CardContent>
        </Card>
        <Grid>
          {" "}
          <Typography style={{ color: "white" }}>{title}</Typography>
          <Typography style={{ color: "white" }}>{year}</Typography>
        </Grid>
      </Grid>
      {open && (
        <MoviesPopUp
          open={open}
          setOpen={setOpen}
          title={title}
          year={year}
          image={image}
        />
      )}
    </>
  );
};

export default MovieContainer;
