import React from 'react';

import { Box, Container, Typography, styled, useTheme } from '@mui/material';

import './preNavbar.css';

const PreNavBar = () => {
  return (
    <>
      <Box className="pre-nav-wrapper">
        <Box className="container">
          <Box className="row">
            <Box className="col-12 content-col">
              <Typography className="pre-nav-text">
                Welcome to The Cottage Co! We're offering free shipping on
                orders over $200 all summer long. Happy Shopping!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PreNavBar;
