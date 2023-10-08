// react-router components
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "assets/theme";
import BasicLayout from "examples/LayoutContainers/BasicLayout";
import Home from "layouts/home";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BasicLayout>
        <Home />
      </BasicLayout>
    </ThemeProvider>
  );
}
