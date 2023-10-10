import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const TagShowcase = () => {
  return (
    <>
      <Box className="tag-showcase">
        <Box className="container">
          <Box className="row intro-row">
            <Box className="col-12 intro-col">
              <Typography className="section-title">
                {' '}
                Cottage Communities{' '}
              </Typography>

              <Link className="btn outline" to="/">
                {' '}
                View All{' '}
              </Link>
            </Box>
          </Box>
          <Box className="row tag-row">
            <Box className="col-12 col-sm-6 col-lg-3 tag-col">
              <Link to="/" className="tag-col-wrapper">
                <Box
                  component="img"
                  className="bg-image cover"
                  src="https://mleo653n2p4x.i.optimole.com/w:1024/h:682/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/100508772_10164044203590497_4211153045033058304_n.jpeg"
                />
                <Typography className="tag-title">Fawn Island</Typography>
              </Link>
            </Box>
            <Box className="col-12 col-sm-6 col-lg-3 tag-col">
              <Link to="/" className="tag-col-wrapper">
                <Box
                  component="img"
                  className="bg-image cover"
                  src="https://mleo653n2p4x.i.optimole.com/w:1024/h:576/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/200391-Grand-Bend.jpeg"
                />
                <Typography className="tag-title">Grand Bend</Typography>
              </Link>
            </Box>
            <Box className="col-12 col-sm-6 col-lg-3 tag-col">
              <Link to="/" className="tag-col-wrapper">
                <Box
                  component="img"
                  className="bg-image cover"
                  src="https://mleo653n2p4x.i.optimole.com/w:1024/h:683/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/75328773_1199603303573774_876320654352187392_n.jpeg"
                />
                <Typography className="tag-title">Port Stanley</Typography>
              </Link>
            </Box>
            <Box className="col-12 col-sm-6 col-lg-3 tag-col">
              <Link to="/" className="tag-col-wrapper">
                <Box
                  component="img"
                  className="bg-image cover"
                  src="https://mleo653n2p4x.i.optimole.com/w:1024/h:683/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/Grand-Cove-MHC-Grand-Bend-ON-Aerial-6.jpeg"
                />
                <Typography className="tag-title">Grand Cove</Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TagShowcase;
