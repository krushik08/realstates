import { createTheme } from '@mui/material/styles';
import typography from './typography';
// A custom theme for this app
const theme = createTheme({
  palette: {
    Web: {
      metal: '#202A1F',
      kelp: '#314528',
      log: '#1B271D',
      sky: '#8BBECE',
      cloud: '#D1DFE2',
      cream: '#F1ECE1',
      squash: '#c95b0c',
      ghost: '#fbfbff',
      fogra: '#040f16',
      almostWhite: '#F1ECE1',
      almostBlack: '#202A1F',
      $primary: '#314528',
      $secondary: '#8BBECE',
      $primary10Hex: '#e6edef',
    },
  },
  typography,
});

export default theme;
