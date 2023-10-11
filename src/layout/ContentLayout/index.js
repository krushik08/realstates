import React, { useState } from 'react';
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from '@mui/material';
import Breadcrumb from '../../components/Breadcrumb';
import { BpRadio } from '../../utils/RadioBoxStyled';

import DeleteIcon from '../../assets/images/delete.png';

function valuetext(value) {
  return `${value}°C`;
}

const ContentLayout = () => {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Delete = (
    <Box
      component="img"
      sx={{
        cursor: 'pointer',
      }}
      src={DeleteIcon}
      height={20}
      width={20}
    />
  );

  return (
    <>
      <Box className="content-area">
        <main id="main" className="site-main">
          <nav className="woocommerce-breadcrumb">
            <Breadcrumb />
          </nav>

          {/* TODO: Offcanvas */}

          {/*  */}
          <Box className="archive-product-wrapper">
            <Box className="container">
              <Box className="row">
                <Box className="d-none d-lg-block col-lg-3 order-lg-first sidebar-col">
                  <h3 className="filter-title text-capitalize"> filters </h3>
                  <Box className="desktop-filter-location">
                    <Box id="filters">
                      <Slider
                        getAriaLabel={() => 'price range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                      />
                      <Box className="price_label">
                        Price:
                        <span className="from"> $14 </span> —
                        <span className="to"> $65</span>
                      </Box>
                    </Box>
                  </Box>

                  <Box my={2}>
                    <h4 className="text-capitalize"> Communities </h4>

                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      sx={{ width: 'fit-content', gap: 1.5, mt: 2 }}
                    >
                      <Stack direction="row" alignItems="center">
                        <FormControlLabel
                          value="fawn-island"
                          control={<BpRadio />}
                          label="Fawn Island"
                        />
                        {/* {Delete} */}
                      </Stack>
                      <FormControlLabel
                        value="grand-bend"
                        control={<BpRadio />}
                        label="Grand Bend"
                      />
                      <FormControlLabel
                        value="grand-cove"
                        control={<BpRadio />}
                        label="Grand Cove"
                      />
                      <FormControlLabel
                        value="long-point"
                        control={<BpRadio />}
                        label="Long Point"
                      />
                      <FormControlLabel
                        value="port-stanley"
                        control={<BpRadio />}
                        label="Port Stanley"
                      />
                      <FormControlLabel
                        value="wasaga-beach"
                        control={<BpRadio />}
                        label="Wasaga Beach"
                      />
                    </RadioGroup>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </main>
      </Box>
    </>
  );
};

export default ContentLayout;
