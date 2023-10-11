import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Banner({ title }) {
  const location = useLocation();
  const [bannerName, setBannerName] = useState();
  useEffect(() => {
    const splitValue = location.pathname.split('/');
    const currentRouteName = splitValue[splitValue.length - 1];
    setBannerName(currentRouteName.replace(/[^a-zA-Z ]/g, ' '));
  }, [location.pathname]);
  return (
    <header className="woocommerce-products-header v3-p-tb">
      <Box className="container">
        <Box className="row justify-content-center">
          <Box className="col-12 col-xl-10">
            <h1 className="woocommerce-products-header__title page-title text-capitalize">
              {bannerName}
            </h1>
          </Box>
        </Box>
      </Box>
    </header>
  );
}
