

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 PRO MUI example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";
import PreNavBar from "examples/Navbars/PreNavbar";

// Authentication layout components

// Argon Dashboard 2 PRO MUI page layout routes
import pageRoutes from "page.routes";
import Footer from "examples/Footer";

function BasicLayout({ button, image, children }) {
  return (
    <PageLayout>
      <PreNavBar />
      <DefaultNavbar routes={pageRoutes} />
      <ArgonBox width="100%" height="100vh" minHeight="100vh">
        {children}
      </ArgonBox>
      <Footer />
    </PageLayout>
  );
}

// Setting default values for the props of BasicLayout
BasicLayout.defaultProps = {
  title: "",
  description: "",
  button: { color: "info" },
};

// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
  button: PropTypes.object,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
