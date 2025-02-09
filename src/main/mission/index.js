import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchText } from "./store";
import SearchBar from "../_components/SearchBar";
import RunnerCard from './components/RunnerCard'
import api from "../../api";
import { Box, Button, Typography } from "@mui/material";
import theme from "../../config/style/theme";
import { useNavigate } from "react-router-dom";
import config from "../../config";

const MissionPage = () => {

  const handleContribute = () => {
    if (config.development) {
      window.open('https://coloradoimmigrant.org/our-work/campaign-for-universal-representation/',  "_blank")
    } else {
      window.open('https://coloradoimmigrant.org/our-work/campaign-for-universal-representation/',  "_blank")
    }
  }

  return (
    <div className="max-w-full max-h-full flex flex-col m-8 gap-4">
      <Box 
        sx={{
            backgroundColor: theme.palette.beige,
            borderRadius: `${theme.shape.borderRadius}px`,
        }}
        className='p-2'
      >
        <div className="flex flex-col gap-4">
          <Typography variant="h2" className="text-center">
            We run so others don’t have to! 
          </Typography>

          <Typography variant="body2">
            We are running on February 8th 2pm in a loop around Civic Center Park in solidarity with the anti-ICE raid protest.
          </Typography>

          <Typography variant="body2">
            ALL donations go to the Colorado Immigrant Rights Coalition Legal Defense Fund. 
          </Typography>

          <Typography variant="body2">
            <a href="https://coloradoimmigrant.org/our-work/campaign-for-universal-representation/" target="_blank">
              Campaign for Universal Representation
            </a>
          </Typography>
        </div>
    </Box>
    <Button onClick={handleContribute} variant="contained" color="secondary" className="flex justify-center align-center items-center">
      <Typography variant="h4">
        Click here to contribute
      </Typography>
    </Button>
    <img src="/donations_to_miles.png"/>
    </div>
  );
};

export default MissionPage;
