import { Box, Typography } from '@mui/material';
import React from 'react';

const ProductCard = (props) => {
  return <Typography className="section-title">{props?.title} </Typography>;
};

export default ProductCard;
