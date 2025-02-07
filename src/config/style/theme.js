import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    green: '#77721f',
    beige: '#f5f5dc',
    brown: '#773b15',
    coral: '#ff6949',
    dark_brown: '#3c2115',
    off_white: '#FAF9F6',
    primary: {
      main: '#FAF9F6',
      text: "#FAF9F6",
      disabled: 'grey',
    },
    secondary: {
      main: "#EED595",
      text: '#26263B'
    },
    background: {
      default: '#3c2115',
      darker: '#1C1C2D'
    },
    button: {
      main: "#D3D3D3",
      contrastText: "#000000",
    },
    error: {
      main: "#d32f2f"
    },
    action: {
      disabledBackground: '#26263B',
      disabled: '#26263B'
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    h3: {
      fontSize: '1.25rem',
    },
    h4: {
      fontSize: '1.0rem',
    },
    body1: {
      fontSize: '1rem'
    },
    body2: {
      fontSize: '.875rem',
    }, 
    body3: {
      fontSize: '.75rem',
      fontFamily: 'Lazy Dog'
    }
  },
  shape: {
    borderRadius: 20,
  },
});

export default theme;
