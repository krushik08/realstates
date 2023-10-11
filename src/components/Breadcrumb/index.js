import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link, useLocation } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
  const location = useLocation();
  const [bannerName, setBannerName] = React.useState();
  React.useEffect(() => {
    const splitValue = location.pathname.split('/');
    const currentRouteName = splitValue[splitValue.length - 1];
    setBannerName(currentRouteName.replace(/[^a-zA-Z ]/g, ' '));
  }, [location.pathname]);
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="">
          Home
        </Link>
        <Link className="text-capitalize" href="#">
          {bannerName}
        </Link>
      </Breadcrumbs>
    </div>
  );
}
