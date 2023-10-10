import React from 'react';
import { Box, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

const ImageWithCaption = () => {
  return (
    <>
      <Box className="full-width-image-cta">
        <Box className="container">
          <Box className="row ">
            <Box className="col-12 content-col">
              <Link className="cta-link">
                <Box
                  component="img"
                  src="https://mleo653n2p4x.i.optimole.com/w:auto/h:auto/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/2-min.png"
                  className="bg-image cover"
                />
                <Typography className="section-title">
                  Cottage fashion, proudly Canadian made.
                </Typography>
                <Typography className="section-content">
                  All of our products are designed, printed and shipped from
                  Canada.{' '}
                </Typography>
                <Box className="btn creamy">Browse Collection </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ImageWithCaption;
