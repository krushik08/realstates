import { Box, Typography } from '@mui/material';
import React from 'react';

const ProductShowcase = () => {
  return (
    <>
      <Box className="product-showcase">
        <Box className="container">
          <Box className="row intro-row">
            <Box className="col-12 col-lg-10 offset-lg-1 intro-col">
              <Typography className="section-title">
                Featured Hoodies{' '}
              </Typography>{' '}
            </Box>

            <Box className="col-12 col-sm-6 col-lg-3 product-showcase-col">
              <Box className="product-tile">
                <Box className="top-wrap">
                  <Box className="image-wrapper">
                    <Box
                      component="img"
                      src="https://mleo653n2p4x.i.optimole.com/w:auto/h:auto/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/68869-56.jpg"
                      className="bg-image contain"
                    />
                  </Box>
                  <Typography className="product-name">
                    Fawn Island Floaty Skeleton Champion™ Hoodie
                  </Typography>

                  <Typography className=" amount">$60</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="col-12 col-sm-6 col-lg-3 product-showcase-col">
              <Box className="product-tile">
                <Box className="top-wrap">
                  <Box className="image-wrapper">
                    <Box
                      component="img"
                      src="https://mleo653n2p4x.i.optimole.com/w:auto/h:auto/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/68869-56.jpg"
                      className="bg-image contain"
                    />
                  </Box>
                  <Typography className="product-name">
                    Fawn Island Floaty Skeleton Champion™ Hoodie
                  </Typography>

                  <Typography className="woocommerce-Price-amount amount">
                    $60
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductShowcase;
