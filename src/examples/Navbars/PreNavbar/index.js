import { Container, styled, useTheme } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import React from "react";

const PreNavBar = () => {
  const theme = useTheme();

  const PreNavTxt = styled(ArgonTypography)(({ theme }) => ({
    color: theme.palette.web.cream,
    ...theme.typography.subtitle2,
  }));
  return (
    <>
      <ArgonBox
        sx={{
          backgroundColor: theme.palette.web.kelp,
          paddingBottom: "0.5rem",
          paddingTop: "0.5rem",
          textAlign: "center",
          width: "100%",
        }}
      >
        <ArgonBox className="container">
          <PreNavTxt>
            Welcome to The Cottage Co! We're offering free shipping on orders
            over $200 all summer long. Happy Shopping!
          </PreNavTxt>
        </ArgonBox>
      </ArgonBox>
    </>
  );
};

export default PreNavBar;
