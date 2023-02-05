import React, { useState } from "react";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import MovieContainer from "./MovieContainer";
import BgImage from "../assests/1126309.jpg";
import Pagination from "@mui/material/Pagination";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const CustomPagination = styled(Pagination)({
  " &.MuiPagination-root": {
    color: "red",
    backgroundColor: "white",
    borderRadius: "10px",
  },
});

const MoviesDashboard = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("batman");
  const [name, setName] = useState("batman");

  const [sortyBy, setSortBy] = useState("");

  const handleSort = (event) => {
    console.log(event, "Event");
    setSortBy(event.target.value);
    if (event.target.value === "oldest") {
      const res = moviesData.sort((a, b) =>
        Number(a.Year) < Number(b.Year)
          ? -1
          : Number(a.Year) > Number(b.Year)
          ? 1
          : 0
      );
      console.log(res, " response");
    } else {
      const res = moviesData.sort((a, b) =>
        Number(b.Year) < Number(a.Year)
          ? -1
          : Number(b.Year) > Number(a.Year)
          ? 1
          : 0
      );
      console.log(res, " response");
    }
  };
  const handlePagination = (event, value) => {
    setPage(value);
  };

  const apiKey = "b65ef454";
  const getMoviesData = async (page, query) => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${
        query?.length > 0 ? query : "batman"
      }&apikey=${apiKey}&page=${page}`
    );
    const data = await response.json();
    setMoviesData(data?.Search);
    console.log(data, "data");
  };

  useEffect(() => {
    getMoviesData(page, query);
  }, [page, query]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Grid container style={{ width: "100%", backgroundColor: "#343434" }}>
      <Grid
        style={{
          width: "100%",
          backgroundColor: "white",
          height: "70px",
          display: "flex",
          flexDirection: "row-reverse",
          position: "fixed",
          // justifyContent: "space-between",
        }}
      >
        <FormControl sx={{ m: 1, width: "300px" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Search movies
          </InputLabel>
          <OutlinedInput
            onChange={(e) => handleChange(e)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setQuery(name)}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Search movies"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "200px" }}>
          <InputLabel id="demo-simple-select-label">Sort By Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortyBy}
            label="Sort By Year"
            onChange={(e) => handleSort(e)}
          >
            <MenuItem value="latest">Latest</MenuItem>
            <MenuItem value="oldest">Oldest</MenuItem>
          </Select>
        </FormControl>
        {/* <CustomTypography>Movies Dashboard</CustomTypography> */}
      </Grid>
      <Grid item style={{ width: "100%", height: "500px", marginTop: "81px" }}>
        <img
          src={BgImage}
          alt=""
          style={{ width: "100%", height: "500px", objectFit: "contain" }}
        />
      </Grid>
      <Grid
        container
        style={{
          display: "flex",
          gap: "20px",
          width: "100%",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
       
        {moviesData?.length > 0
          ? moviesData?.map(({ Poster, Title, Year }) => {
              return (
                <MovieContainer image={Poster} title={Title} year={Year} />

                
              );
            })
          : null}
      </Grid>
      <Grid
        item
        lg={12}
        xl={12}
        md={12}
        sm={12}
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          paddingBottom: "10px",
        }}
      >
        <CustomPagination
          count={10}
          onChange={handlePagination}
          color="primary"
        />
      </Grid>
    </Grid>
  );
};

export default MoviesDashboard;
