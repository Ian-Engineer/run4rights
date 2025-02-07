import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchText } from "./store";
import SearchBar from "../_components/SearchBar";
import RunnerCard from './components/RunnerCard'
import api from "../../api";
import { Box, Button, Typography } from "@mui/material";
import theme from "../../config/style/theme";

const MissionPage = () => {

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
            As donations increase, our mileage increases.
          </Typography>

          <Typography variant="body2">
            Our mission is to raise money to provide legal counsel to those in the Aurora ICE detention center. 70% of immigrants detained at the GEO immigration detention center in Aurora, CO do not have a lawyer. Immigrants with legal representation are 3.5 times more likely to be released from detention on bond. Immigrants with legal representation are 10 times more likely to win their cases. 
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
    <Button variant="contained" color="secondary" className="flex justify-center align-center items-center">
      <Typography variant="h4">
        Click here to contribute
      </Typography>
    </Button>
    </div>
  );
};

export default MissionPage;
