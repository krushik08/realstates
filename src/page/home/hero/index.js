import React from 'react';
import { Box, Typography } from '@mui/material';

import HeroImage from '../../../assets/images/heroImage.jpg';
import { Link } from 'react-router-dom';

import './hero.css';

const Hero = () => {
  return (
    <>
      <Box className="hero-front">
        <Box className="container">
          <Box className="row">
            <Box className="col-12 col-md-6 image-col p-0">
              <Box className="image-wrapper">
                <Box
                  component="img"
                  src={HeroImage}
                  className="bg-image cover"
                />
              </Box>
            </Box>
            {/*  */}
            <Box className="col-12 col-md-6 content-col p-0">
              <Box className="content-wrapper">
                <Typography className="hero-title">
                  Life is better at the cottage.
                </Typography>

                <Box className="button-group">
                  <Link to="/shop" className="btn creamy">
                    Shop All
                  </Link>

                  <Link to="/communities" className="btn outline white-outline">
                    Shop by Community
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
