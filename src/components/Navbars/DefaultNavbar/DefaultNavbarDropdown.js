// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';

// react-router-dom components
import { Link } from 'react-router-dom';

// @mui material components
import Icon from '@mui/material/Icon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Box, Typography, useTheme } from '@mui/material';

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
      <li
        {...rest}
        {...(route && routeComponent)}
        className="menu-item menu-item-type-post_type menu-item-object-page nav-item "
      >
        <Link className="nav-link text-capitalize dropdown-toggle" to="/">
          {name}
          {collapse && (
            <KeyboardArrowDownIcon
              sx={{
                verticalAlign: 'middle',
                fontWeight: '300',
              }}
            />
          )}
        </Link>
      </li>
    </>
  );
}

// Setting default values for the props of DefaultNavbarDropdown
DefaultNavbarDropdown.defaultProps = {
  icon: false,
  children: false,
  collapseStatus: false,
  light: false,
  href: '',
  route: '',
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
