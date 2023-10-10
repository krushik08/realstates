// @mui material components
import {
  Box,
  Button,
  Container,
  Input,
  InputBase,
  Stack,
  TextField,
  Typography,
  styled,
} from '@mui/material';

import FooterLogo from '../../assets/images/Cottage-Company-Beige-1-4.png';
import { Link } from 'react-router-dom';

function Footer() {
  const StyledSubscribeButton = styled(Button)(({ theme }) => ({
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: '.375rem',
    borderBottomRightRadius: '.375rem',
    background: '#F1ECE1',
    color: '#202a1f',
    textTransform: 'capitalize',
    width: '100px',

    ':hover': {
      backgroundColor: '#e9e1d0',
      color: '#1b271d',
      transform: 'translateY(0)',
    },
  }));

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: '.375rem',
      borderBottomLeftRadius: '.375rem',
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
    },
  }));
  return (
    <>
      <footer id="footer">
        <Box className="container">
          <Box className="row">
            <Box className="col-12 col-md-6 col-xl-3 logo-col">
              <Link to="/" class="footer-brand">
                <Box component="img" src={FooterLogo} className="logo" />
              </Link>

              <Box className="site-meta">
                <Box className="link-wrapper">
                  <Link to="/" className="footer-link">
                    admin@thecottageco.com
                  </Link>
                </Box>
              </Box>
            </Box>

            <nav className="col-xl-4 d-none d-xl-block menu-col">
              <ul className="menu nav">
                <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat nav-item">
                  <Link to="/" className="nav-link">
                    Hoodies
                  </Link>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat nav-item">
                  <Link to="/" className="nav-link">
                    T-Shirts
                  </Link>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat nav-item">
                  <Link to="/" className="nav-link">
                    Youth
                  </Link>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat nav-item">
                  <Link to="/" className="nav-link">
                    Champion
                  </Link>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat nav-item">
                  <Link to="/" className="nav-link">
                    Canada
                  </Link>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat nav-item">
                  <Link to="/" className="nav-link">
                    Beach
                  </Link>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat nav-item">
                  <Link to="/" className="nav-link">
                    Grand Bend
                  </Link>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat nav-item">
                  <Link to="/" className="nav-link">
                    FawnIsland
                  </Link>
                </li>
              </ul>
            </nav>

            <Box className="col-12 col-md-6 offset-xl-1 col-xl-4 newsletter-col">
              <h3 className="form-title">Newsletter</h3>
              <p className="form-content">
                No annoying emails, just discount codes.
              </p>
              <Stack
                direction="row"
                justifyContent={{
                  xs: 'center',
                  md: 'flex-start',
                }}
              >
                <BootstrapInput type="email" placeholder="Email Address" />
                <StyledSubscribeButton fullWidth>
                  Subscribe{' '}
                </StyledSubscribeButton>
              </Stack>{' '}
            </Box>
          </Box>
        </Box>
      </footer>
    </>
  );
}

export default Footer;
