import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const TagCard = ({ tag }) => {
  return (
    <>
      <Link to={tag?.url} className="tag-col-wrapper  community-tile">
        <Box component="img" className="bg-image cover" src={tag?.image} />
        <Typography className="tag-title community-name">
          {tag?.name}
        </Typography>
      </Link>
    </>
  );
};
export default TagCard;
