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

  useEffect(()=>{
    const socket = new WebSocket(config.development ? "ws://localhost:4000" : "wss://3.139.85.223:4000"); // Change to your actual server URL

    socket.onmessage = (event) => {
        const total = JSON.parse(event.data).data;
        console.log(total)
        setTotal(total)
        setLoading(false)
    };

    socket.onopen = () => {
      console.log('connected')
    }
  },[])

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
    </div>
  );
};

export default ProgressPage;
