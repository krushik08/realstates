// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';

// @mui material components
import Grid from '@mui/material/Grid';

// import Footer from 'examples/Footer';
import { Box } from '@mui/material';
import PageLayout from '../PageLayout';
import pageRoutes from '../../page.routes';
import DefaultNavbar from '../../components/Navbars/DefaultNavbar';
import Footer from '../../components/Footer';

function MinimalLayout({ button, image, children }) {
  return (
    <PageLayout>
      <main id="main" className="fixed-navbar">
        <DefaultNavbar routes={pageRoutes} />
        <Box width="100%" minHeight="100vh">
          {children}
        </Box>
      </main>
      <Footer />
    </PageLayout>
  );
}

// Setting default values for the props of MinimalLayout
MinimalLayout.defaultProps = {
  title: '',
  description: '',
  button: { color: 'info' },
};

// Typechecking props for the MinimalLayout
MinimalLayout.propTypes = {
  button: PropTypes.object,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MinimalLayout;
