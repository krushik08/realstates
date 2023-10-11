import React from 'react';
import Banner from '../../components/Banner';
import TagCard from '../../components/Card/TagCard';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Title } from '@mui/icons-material';

const TagList = [
  {
    name: 'Fawn Island',
    url: 'community/fawn-island/',
    image:
      'https://mleo653n2p4x.i.optimole.com/w:1024/h:682/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/100508772_10164044203590497_4211153045033058304_n.jpeg',
  },
  {
    name: 'Grand Bend',
    url: 'community/grand-bend/',
    image:
      'https://mleo653n2p4x.i.optimole.com/w:1024/h:576/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/200391-Grand-Bend.jpeg',
  },
  {
    name: 'Port Stanley',
    url: 'community/port-stanley/',
    image:
      'https://mleo653n2p4x.i.optimole.com/w:1024/h:683/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/75328773_1199603303573774_876320654352187392_n.jpeg',
  },
  {
    name: 'Grand Cove',
    url: 'community/grand-cove/',
    image:
      'https://mleo653n2p4x.i.optimole.com/w:1024/h:683/q:mauto/f:avif/https://thecottageco.com/wp-content/uploads/2023/06/Grand-Cove-MHC-Grand-Bend-ON-Aerial-6.jpeg',
  },
];

const Communities = () => {
  return (
    <>
      <Banner />
      <section className="community-grid v1-p-t">
        <Box className="container">
          <Box className="row">
            {TagList.map((item) => (
              <Box className="col-12 col-sm-6 col-md-4 community-tile-col">
                <TagCard tag={item} />
              </Box>
            ))}
          </Box>
        </Box>
      </section>
    </>
  );
};
export default Communities;
