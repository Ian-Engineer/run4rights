import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchText } from "./store";
import SearchBar from "../_components/SearchBar";
import RunnerCard from './components/RunnerCard'
import api from "../../api";
import { Box, Button, Typography } from "@mui/material";
import theme from "../../config/style/theme";

const ProgressPage = () => {

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
            Thanks to you, we've raised: 
          </Typography>

          <Typography variant="body2">
            Number of money
          </Typography>
        </div>
      </Box>
    </div>
  );
};

export default ProgressPage;
