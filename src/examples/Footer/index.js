// @mui material components
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import { Container, Stack, styled } from "@mui/material";

import FooterLogo from "../../assets/images/logos/Cottage-Company-Beige-1-4.png";
import { Link } from "react-router-dom";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

function Footer() {
  const StyledFooter = styled(ArgonBox)(({ theme }) => ({
    padding: theme.spacing(9, 0),
    background: theme.palette.web.kelp,
  }));

  const StyledFooterLogo = styled(ArgonBox)(({ theme }) => ({
    height: "6.5rem",
    marginBottom: "1.5rem",
    maxWidth: "12.5rem",
  }));

  const StyledFooterLink = styled(Link)(({ theme }) => ({
    color: theme.palette.web.cream,
    ...theme.typography.body1,
  }));

  const StyledFooterNav = styled(ArgonBox)(({ theme }) => ({
    display: "block",
    columnCount: 2,
  }));

  const StyledFooterNavLink = styled(Link)(({ theme }) => ({
    ...theme.typography.body1,
    color: "#fff",
    fontWeight: " 500",
    display: "block",
    padding: ".5rem 1rem",
    transition:
      "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out",
    ":hover": {
      textDecoration: "underline !important",
    },
  }));

  const StyledFooterNews = styled(ArgonTypography)(({ theme }) => ({
    color: theme.palette.web.cream,
    fontSize: "1.75rem",
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: "0.5rem",
    marginTop: 0,
  }));

  const StyledFooterNewsTxt = styled(ArgonTypography)(({ theme }) => ({
    color: theme.palette.web.cream,
    marginBottom: theme.spacing(2),
    ...theme.typography.body1,
  }));

  const StyledArgonInput = styled(ArgonInput)({
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: ".375rem",
    borderBottomLeftRadius: ".375rem",
  });

  const StyledSubscribeButton = styled(ArgonButton)(({ theme }) => ({
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: ".375rem",
    borderBottomRightRadius: ".375rem",

    background: theme.palette.web.cream,
    ":hover": {
      backgroundColor: "#e9e1d0",
      color: "#1b271d",
      transform: "translateY(0)",
    },
  }));

  return (
    <StyledFooter component="footer">
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems={{ xs: "center", xl: "flex-start" }}
          flexGrow={1}
        >
          <Grid item xs={12} md={6} xl={3}>
            <Stack
              direction="column"
              alignItems={{ xs: "center", xl: "flex-start" }}
            >
              <StyledFooterLogo component="img" src={FooterLogo} />
              <StyledFooterLink to="mailto:admin@thecottageco.com">
                admin@thecottageco.com
              </StyledFooterLink>
            </Stack>
          </Grid>

          <Grid item xl={4} display={{ xs: "none", xl: "block" }}>
            <StyledFooterNav>
              <StyledFooterNavLink to="#">Hoodies</StyledFooterNavLink>
              <StyledFooterNavLink to="#">T-Shirts</StyledFooterNavLink>
              <StyledFooterNavLink to="#">Youth</StyledFooterNavLink>
              <StyledFooterNavLink to="#">Champion</StyledFooterNavLink>
              <StyledFooterNavLink to="#">Canada </StyledFooterNavLink>
              <StyledFooterNavLink to="#">Beach</StyledFooterNavLink>
              <StyledFooterNavLink to="#">Grand Bend</StyledFooterNavLink>
              <StyledFooterNavLink to="#">FawnIsland</StyledFooterNavLink>
            </StyledFooterNav>
          </Grid>

          <Grid item xs={12} md={6} xl={4} mt={{ xs: 5, xl: 0 }}>
            <Stack direction="column" textAlign={{ xs: "center", xl: "start" }}>
              <StyledFooterNews>Newsletter</StyledFooterNews>
              <StyledFooterNewsTxt>
                No annoying emails, just discount codes.
              </StyledFooterNewsTxt>
              <ArgonBox>
                <Stack direction="row">
                  <StyledArgonInput type="email" placeholder="Email Address" />
                  <StyledSubscribeButton>Subscribe </StyledSubscribeButton>
                </Stack>{" "}
              </ArgonBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
