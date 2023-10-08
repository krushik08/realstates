// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import { useTheme } from "@mui/material";

function DefaultNavbarDropdown({
  name,
  icon,
  children,
  collapseStatus,
  light,
  href,
  route,
  collapse,
  ...rest
}) {
  const theme = useTheme();

  const routeComponent = {
    component: Link,
    to: route,
  };

  return (
    <>
      <ArgonBox
        {...rest}
        display="flex"
        alignItems="baseline"
        sx={{
          px: "0.5rem",
          mr: "0.5rem",
          cursor: "pointer",
          userSelect: "none",
        }}
        {...(route && routeComponent)}
      >
        <ArgonTypography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          sx={{
            fontWeight: "100%",
            color: "rgba(0,0,0,.55)",
            ...theme.typography.bodyFont,
            letterSpacing: 0,
            fontWeight: 500,
          }}
        >
          {name}
        </ArgonTypography>
        {collapse && (
          <ArgonTypography variant="body2" ml="auto">
            <Icon
              sx={{
                verticalAlign: "middle",
                fontSize: "1rem !important",
              }}
            >
              {collapse && "keyboard_arrow_down"}
            </Icon>
          </ArgonTypography>
        )}
      </ArgonBox>
    </>
  );
}

// Setting default values for the props of DefaultNavbarDropdown
DefaultNavbarDropdown.defaultProps = {
  icon: false,
  children: false,
  collapseStatus: false,
  light: false,
  href: "",
  route: "",
};

// Typechecking props for the DefaultNavbarDropdown
DefaultNavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node,
  children: PropTypes.node,
  collapseStatus: PropTypes.bool,
  light: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
  collapse: PropTypes.bool.isRequired,
};

export default DefaultNavbarDropdown;
