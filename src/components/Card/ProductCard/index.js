import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Box className="col-12 col-sm-6 col-lg-3 product-showcase-col">
      <Link to={product?.url}>
        <Box className="product-tile">
          <Box className="top-wrap">
            <Box className="image-wrapper">
              <Box
                component="img"
                src={
                  product?.image ||
                  'https://mleo653n2p4x.i.optimole.com/w:1024/h:1024/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/woocommerce-placeholder.webp'
                }
                className="bg-image contain"
              />
            </Box>
            <Typography className="product-name">{product?.name}</Typography>
            <Typography className=" amount">${product?.price}</Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}
