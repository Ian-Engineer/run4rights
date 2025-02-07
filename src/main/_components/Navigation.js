import { useState, useEffect } from "react";
import { AppBar, Box, Toolbar, IconButton, Button, Typography, Menu, MenuItem } from "@mui/material";
import navigationConfig from "../../config/navigation";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "../../config/style/theme";
import { useDispatch, useSelector } from "react-redux";
import { logout, setLastLocation } from "../../config/userSlice";
import api from "../../api";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleRunners = () => {
    navigate('/runners')
  }

  const handleMission = () => {
    navigate('/')
  }

  const handleProgress = () => {
    navigate('/money-raised')
  }

  return (
    <AppBar position="static">
      <Toolbar
        disableGutters
        style={{ background: theme.palette.dark_brown }}
        className="w-full m-0"
      >
        <Box
          className="ml-2 mr-2 flex flex-row justify-between w-full"
          color="primary"
        >
          <Button
            size="medium"
            aria-label="Donate"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleRunners}
            color="primary"
            variant="text"
          >
            <Typography
              className="flex items-center w-20 justify-center"
            >
              Runners
            </Typography>
          </Button>
          <Button
            size="medium"
            aria-label="Donate"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMission}
            color="primary"
            variant="text"
          >
            <Typography
              className="flex items-center w-20 justify-center"
            >
              Mission
            </Typography>
          </Button>
          <Button
            size="medium"
            aria-label="see progress"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleProgress}
            color="primary"
            variant="text"
          >
            <Typography
              className="flex items-center w-20 justify-center"
            >
              Progress
            </Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default NavigationBar;
