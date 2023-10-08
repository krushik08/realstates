import { useState, useEffect, Fragment } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-router components
import { Link } from "react-router-dom";

// @mui material components
import Icon from "@mui/material/Icon";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";
import Container from "@mui/material/Container";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Argon Dashboard 2 PRO MUI examples components
import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

// Argon Dashboard 2 PRO MUI Base Styles
import breakpoints from "assets/theme/base/breakpoints";

// Material Dashboard 2 PRO React context
import { useArgonController } from "context";

import BrandLogo from "./../../../assets/images/logos/Cottage-Company-Green-2.png";
import { styled, useTheme } from "@mui/material";

function DefaultNavbar({ routes, brand, transparent, light, action }) {
  const [controller] = useArgonController();
  const { darkMode } = controller;
  const theme = useTheme();

  const [dropdown, setDropdown] = useState("");
  const [dropdownEl, setDropdownEl] = useState("");
  const [dropdownName, setDropdownName] = useState("");
  const [nestedDropdown, setNestedDropdown] = useState("");
  const [nestedDropdownEl, setNestedDropdownEl] = useState("");
  const [nestedDropdownName, setNestedDropdownName] = useState("");
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
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
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
                target: "_blank",
                rel: "noreferrer",
              };

              const routeComponent = {
                component: Link,
                to: item.route,
              };

              return (
                <ArgonTypography
                  key={item.name}
                  {...(item.route ? routeComponent : linkComponent)}
                  display="flex"
                  textTransform="capitalize"
                  mb={key === collapse.length - 1 ? 0 : 0.5}
                  sx={({ palette: { grey }, functions: { rgba } }) => ({
                    cursor: "pointer",
                    transition: "all 300ms linear",
                    ...theme.typography.bodyFont,
                    color: theme.palette.grey[900],
                    padding: "0.75rem",
                    "&:hover": {
                      backgroundColor: rgba(grey[200], 1),
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
                </ArgonTypography>
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
      style={{ zIndex: 999 }}
      modifiers={[
        {
          name: "arrow",
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
          setDropdownName("");
        }
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            minWidth: "10rem",
            background: ({ palette: { white } }) => white.main,
          }}
        >
          <ArgonBox
            shadow="none"
            borderRadius="0.25rem"
            py={0.5}
            mt={0.5}
            border="1px solid rgba(0,0,0,.15)"
          >
            {renderRoutes}
          </ArgonBox>
        </Grow>
      )}
    </Popper>
  );

  const Logo = styled(ArgonBox)(({ theme }) => ({
    height: "80px",

    [theme.breakpoints.down("lg")]: {
      height: "40px",
    },
  }));

  return (
    <>
      <ArgonBox
        pt={0.5}
        pb={0.5}
        m={0}
        px={0}
        width={"100%"}
        position="relative"
        sx={{
          backgroundColor: "#F1ECE1",
        }}
      >
        <Container maxWidth="xl">
          <ArgonBox
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <ArgonBox
              component={Link}
              to="/"
              py={transparent ? 1.5 : 0.75}
              lineHeight={1}
              pl={{ xs: 0, lg: 1 }}
            >
              <Logo component="img" src={BrandLogo} alt="brandName" />
            </ArgonBox>
            <ArgonBox
              color="inherit"
              display={{ xs: "none", lg: "flex" }}
              m={0}
              p={0}
            >
              {renderNavbarItems}
            </ArgonBox>

            <ArgonBox
              display={{ xs: "inline-block", lg: "none" }}
              lineHeight={0}
              py={1.5}
              pl={1.5}
              color={transparent || darkMode ? "white" : "inherit"}
              sx={{ cursor: "pointer" }}
              onClick={openMobileNavbar}
            >
              <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
            </ArgonBox>
          </ArgonBox>
          <ArgonBox
            shadow={transparent ? "lg" : "none"}
            borderRadius="md"
            px={transparent ? 2 : 0}
            sx={{
              backgroundColor: ({
                palette: { white, transparent: transparentColor, background },
              }) => {
                let bgColorValue = transparentColor.main;

                if (transparent && darkMode) {
                  bgColorValue = background.dark;
                } else if (transparent) {
                  bgColorValue = white.main;
                }

                return bgColorValue;
              },
            }}
          >
            {mobileView && (
              <DefaultNavbarMobile routes={routes} open={mobileNavbar} />
            )}
          </ArgonBox>
        </Container>
      </ArgonBox>
      {dropdownMenu}
    </>
  );
}

// Declaring default props for DefaultNavbar
DefaultNavbar.defaultProps = {
  brand: "The Cottage Co!",
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
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["contained", "outlined", "gradient"]),
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
      "default",
      "white",
    ]),
    label: PropTypes.string.isRequired,
  }),
};

export default DefaultNavbar;
