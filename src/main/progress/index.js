import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchText } from "./store";
import SearchBar from "../_components/SearchBar";
import RunnerCard from './components/RunnerCard'
import api from "../../api";
import { Box, Button, Typography, Skeleton } from "@mui/material";
import theme from "../../config/style/theme";
import config from "../../config";

const ProgressPage = () => {
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [mileage, setMileage] = useState(0);
  const [currentMileage, setCurrentMileage] = useState(0);

  useEffect(()=>{

    fetch("https://lhecgihqf43th4rstngwaprc7a0zdubd.lambda-url.us-east-2.on.aws/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => {
        setTotal(data.totalDonations)
        setMileage(calculateMileage(data.totalDonations))
        setCurrentMileage(data.runners.reduce((sum, runner) => sum + runner.mileage, 0))
        setLoading(false)
      })
      .catch(error => console.error("Error connecting to Lambda:", error));
  },[])

const calculateMileage = dollars => {
  if (dollars < 50) {
    return Math.floor(dollars / 5);
  } else if (dollars < 150) {
    return Math.floor((dollars - 50) / 10) + 10;
  } else if (dollars < 300) {
    return Math.floor((dollars - 150) / 15) + 20;
  } else if (dollars < 500) {
    return Math.floor((dollars - 300) / 20) + 30;
  } else if (dollars < 750) {
    return Math.floor((dollars - 500) / 25) + 40;
  } else if (dollars < 1050) {
    return Math.floor((dollars - 750) / 30) + 50;
  } else if (dollars < 1400) {
    return Math.floor((dollars - 1050) / 35) + 60;
  } else if (dollars < 1850) {
    return Math.floor((dollars - 1400) / 45) + 70;
  } else if (dollars < 2400) {
    return Math.floor((dollars - 1850) / 55) + 80;
  } else {
    return Math.floor((dollars - 2400) / 65) + 90
  }
};

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

          {
            loading? 
            <Skeleton variant="text" sx={{ fontSize: '2.5rem' }} className="p0 m0"/> 
            :
            <Typography variant="h1" className='text-center'>
              ${total}
            </Typography>
          }
        </div>
      </Box>

      <Box 
        sx={{
            backgroundColor: theme.palette.beige,
            borderRadius: `${theme.shape.borderRadius}px`,
        }}
        className='p-2'
      >
        <div className="flex flex-col gap-4">
          <Typography variant="h2" className="text-center">
            Mileage Goal: 
          </Typography>

          {
            loading? 
            <Skeleton variant="text" sx={{ fontSize: '2.5rem' }} className="p0 m0"/> 
            :
            <Typography variant="h1" className='text-center'>
              {mileage} miles
            </Typography>
          }
        </div>
      </Box>

            <Box 
        sx={{
            backgroundColor: theme.palette.beige,
            borderRadius: `${theme.shape.borderRadius}px`,
        }}
        className='p-2'
      >
        <div className="flex flex-col gap-4">
          <Typography variant="h2" className="text-center">
            Current Mileage: 
          </Typography>

          {
            loading? 
            <Skeleton variant="text" sx={{ fontSize: '2.5rem' }} className="p0 m0"/> 
            :
            <Typography variant="h1" className='text-center'>
              {currentMileage} miles
            </Typography>
          }
        </div>
      </Box>
    </div>
  );
};

export default ProgressPage;
