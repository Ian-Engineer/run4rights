import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchText } from "./store";
import SearchBar from "../_components/SearchBar";
import RunnerCard from './components/RunnerCard'
import api from "../../api";
import { Box, Button, Typography, Skeleton } from "@mui/material";
import theme from "../../config/style/theme";
import config from "../../config";

const eventOver = true

const ProgressPage = () => {

  return (
    <div className="max-w-full max-h-full flex flex-col m-8 gap-4">
        {eventOver ? 
        <div className="flex flex-col gap-2">
            <Box 
              sx={{
                  backgroundColor: theme.palette.beige,
                  borderRadius: `${theme.shape.borderRadius}px`,
              }}
              className='p-2'
            >
              <Typography variant="h2" className="text-center">
                Thank you!!
              </Typography>

              <Typography variant="body2">
                We had an amazing turn out at the protest today, February 8th! We managed to raise $3,016 during the event, which amounted to 99 miles! Collectively, we ran 100. After the event, a few others donated and the total came out to $3,146. We are very excited to present CIRC with this large sum!
              </Typography>
            </Box>
            <img src="/event.png"/>
          </div>
        : 
          null
        }

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

            <Typography variant="h1" className='text-center'>
              $3,146
            </Typography>
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

          <Typography variant="h1" className='text-center'>
            99 miles
          </Typography>
        </div>
      </Box>

        <div className="pb-8">
      <Box 
        sx={{
            backgroundColor: theme.palette.beige,
            borderRadius: `${theme.shape.borderRadius}px`,
        }}
        className='p-2'
      >
        <div className="flex flex-col gap-4">
          <Typography variant="h2" className="text-center">
            Ending Mileage: 
          </Typography>

          <Typography variant="h1" className='text-center'>
            100 miles
          </Typography>
        </div>
      </Box>
      </div>
    </div>
  );
};

export default ProgressPage;
