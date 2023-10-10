import { useState, useEffect, Fragment } from 'react';
import PreNavBar from '../PreNavbar';

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

// react-router components
import { Link } from 'react-router-dom';

// @mui material components
import Icon from '@mui/material/Icon';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import MuiLink from '@mui/material/Link';
import Container from '@mui/material/Container';

import BrandLogo from './../../../assets/images/Cottage-Company-Green-2.png';
import { Box, Typography, styled, useTheme } from '@mui/material';
import DefaultNavbarDropdown from './DefaultNavbarDropdown';
import DefaultNavbarMobile from './DefaultNavbarMobile';
import breakpoints from '../../../theme/breakpoints';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

function DefaultNavbar({ routes, brand, transparent, light, action }) {
  const theme = useTheme();

  const [dropdown, setDropdown] = useState('');
  const [dropdownEl, setDropdownEl] = useState('');
  const [dropdownName, setDropdownName] = useState('');
  const [nestedDropdown, setNestedDropdown] = useState('');
  const [nestedDropdownEl, setNestedDropdownEl] = useState('');
  const [nestedDropdownName, setNestedDropdownName] = useState('');
  const [arrowRef, setArrowRef] = useState(null);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener('resize', displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', displayMobileNavbar);
  }, []);

  const renderNavbarItems = routes.map(
    ({ name, icon, href, route, collapse }) => (
      <DefaultNavbarDropdown
        key={name}
        name={name}
        icon={icon}
        href={href}
        route={route}
        collapse={Boolean(collapse)}
        onMouseEnter={({ currentTarget }) => {
          if (collapse) {
            setDropdown(currentTarget);
            setDropdownEl(currentTarget);
            setDropdownName(name);
          }
        }}
        onMouseLeave={() => collapse && setDropdown(null)}
        light={light}
      />
    )
  );

  // Render the routes on the dropdown menu
  const renderRoutes = routes.map(({ name, collapse }) => {
    let template;

    // Render the dropdown menu that should be display as columns
    if (collapse && name === dropdownName) {
      template = (
        <Grid container alignItems="center">
          <Grid item xs={12}>
            {collapse.map((item, key) => {
              const linkComponent = {
                component: MuiLink,
                href: item.href,
                target: '_blank',
                rel: 'noreferrer',
              };

              const routeComponent = {
                component: Link,
                to: item.route,
              };

              return (
                <Typography
                  key={item.name}
                  {...(item.route ? routeComponent : linkComponent)}
                  display="flex"
                  textTransform="capitalize"
                  mb={key === collapse.length - 1 ? 0 : 0.5}
                  sx={({ palette: { grey } }) => ({
                    cursor: 'pointer',
                    transition: 'all 300ms linear',
                    ...theme.typography.bodyFont,
                    color: theme.palette.grey[900],
                    padding: '0.75rem',
                    '&:hover': {
                      backgroundColor: grey[200],
                    },
                  })}
                  onMouseEnter={({ currentTarget }) => {
                    if (item.dropdown) {
                      setNestedDropdown(currentTarget);
                      setNestedDropdownEl(currentTarget);
                      setNestedDropdownName(item.name);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.dropdown) {
                      setNestedDropdown(null);
                    }
                  }}
                >
                  {item.name}
                </Typography>
              );
            })}
          </Grid>
        </Grid>
      );
    }

    return template;
  });

  // Routes dropdown menu
  const dropdownMenu = (
    <Popper
      anchorEl={dropdown}
      popperRef={null}
      open={Boolean(dropdown)}
      placement="top-start"
      transition
      style={{ zIndex: 9999 }}
      modifiers={[
        {
          name: 'arrow',
          enabled: true,
          options: {
            element: arrowRef,
          },
        },
      ]}
      onMouseEnter={() => setDropdown(dropdownEl)}
      onMouseLeave={() => {
        if (!nestedDropdown) {
          setDropdown(null);
          setDropdownName('');
        }
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: 'left top',
            minWidth: '10rem',
            background: '#fff',
          }}
        >
          <Box
            shadow="none"
            borderRadius="0.25rem"
            py={0.5}
            mt={0.5}
            border="1px solid rgba(0,0,0,.15)"
          >
            {renderRoutes}
          </Box>
        </Grow>
      )}
    </Popper>
  );

  return (
    <>
      <header>
        <nav
          id="header"
          className="navbar navbar-expand-lg navbar-light bg-light fixed-top home"
        >
          {' '}
          <PreNavBar />
          <Box className="nav-wrapper">
            <Box className="container">
              <Link to="/" className="navbar-brand">
                <Box component="img" src={BrandLogo} />
              </Link>

              {/*  */}
              <Box
                className="open-flyout-menu cursor-pointer"
                display={{ xs: 'inline-block', lg: 'none' }}
                lineHeight={0}
                onClick={openMobileNavbar}
              >
                {mobileNavbar ? <CloseIcon /> : <MenuIcon />}
              </Box>

              {/*  */}
              <Box
                id="navbar"
                className="collapse navbar-collapse d-none d-lg-flex"
              >
                <ul id="menu-navigation-1" className="navbar-nav">
                  {renderNavbarItems}
                </ul>
              </Box>

              {/*  */}
              <Box className="nav-icon-wrapper d-none d-lg-flex"></Box>
            </Box>
          </Box>
          {mobileView && (
            <DefaultNavbarMobile routes={routes} open={mobileNavbar} />
          )}
          {dropdownMenu}
        </nav>
      </header>
    </>
  );
}

// Declaring default props for DefaultNavbar
DefaultNavbar.defaultProps = {
  brand: 'The Cottage Co!',
  transparent: false,
  light: false,
  action: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  brand: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.shape({
    type: PropTypes.oneOf(['external', 'internal']).isRequired,
    route: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['contained', 'outlined', 'gradient']),
    color: PropTypes.oneOf([
      'primary',
      'secondary',
      'info',
      'success',
      'warning',
      'error',
      'dark',
      'light',
      'default',
      'white',
    ]),
    label: PropTypes.string.isRequired,
  }),
};

export default DefaultNavbar;
