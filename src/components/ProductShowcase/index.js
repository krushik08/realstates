import { Box, Typography } from '@mui/material';
import React from 'react';
import Title from './title';
import ProductCard from '../Card/ProductCard';

const ProductShowcase = (props) => {
  return (
    <>
      <Box className="product-showcase">
        <Box className="container">
          <Box className="row intro-row">
            <Box className="col-12 col-lg-10 offset-lg-1 intro-col">
              <Title title={props.title} />
            </Box>
            {props?.product.map((item) => (
              <ProductCard product={item} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductShowcase;
