import React from "react";
import { Container, Grid, styled } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

import HeroImage from "../../../assets/images/heroImage.jpg";
import ArgonButton from "components/ArgonButton";

const Hero = () => {
  const HeroWrapper = styled(ArgonBox)(({ theme }) => ({
    margin: "2rem auto 0",
    maxWidth: "90rem",

    "@media (max-width: 1439.98px)": {
      borderRadius: "0",
      margin: "0 auto",
      overflow: "hidden",
    },

    "@media (min-width: 1440px)": {
      maxWidth: "85rem",
    },
  }));

  const HeroImageWrapper = styled(ArgonBox)(({ theme }) => ({
    height: "100%",
    position: "relative",

    "@media(min-width: 1440px)": {
      borderBottomLeftRadius: "1.5rem",
      borderTopLeftRadius: "1.5rem",
      overflow: "hidden",
      marginLeft: "-4rem!important",
      width: "calc(100% + 4rem)!important",
    },

    "@media(min-width: 1200px) and (max-width: 1439.98px)": {
      marginLeft: "-4rem!important",
      width: "calc(100% + 4rem)!important",
    },

    "@media (min-width: 1024px) and (max-width: 1199.98px)(min-width: 768px) and (max-width: 1023.98px)":
      {
        marginLeft: "-4rem!important",
        width: "calc(100% + 3.5rem)!important",
      },

    "@media (min-width: 640px) and (max-width: 767.98px)": {
      minHeight: "18.75rem",
      marginLeft: "-3rem!important",
      marginRight: "-3rem!important",
      width: "calc(100% + 6rem)!important",
    },

    "@media (max-width: 639.98px)": {
      minHeight: "13.75rem",
      marginLeft: "-1.5rem!important",
      marginRight: "-1.5rem!important",
      width: "calc(100% + 3rem)!important",
    },
  }));

  const HeroImg = styled(ArgonBox)(({ theme }) => ({
    height: "100%",
    left: 0,
    objectFit: "cover",
    objectPosition: "center",
    pointerEvents: "none",
    position: "absolute",
    top: 0,
    transition: "all .2s ease-in-out",
    width: "100%",
    zIndex: 1,
  }));

  const HeroContent = styled(ArgonBox)(({ theme }) => ({
    "@media (min-width: 1440px)": {
      backgroundImage: "linear-gradient(109.6deg,#314528 11.2%,#2a3b22 91.1%)",
      borderBottomRightRadius: "1.5rem",
      borderTopRightRadius: "1.5rem",
    },
    "@media (min-width: 768px) and (min-width: 1440px)": {
      paddingLeft: "4rem",
      paddingTop: "14.5rem",
      paddingBottom: "14.5rem",
    },
    "@media (min-width: 768px)": {
      paddingBottom: "4.5rem",
      paddingLeft: "1.5rem",
      paddingTop: "4.5rem",
    },
    "@media (min-width: 1440px)": {
      marginRight: "-4rem!important",
      paddingTop: "10rem",
      width: "calc(100% + 4rem)!important",
      paddingBottom: "10rem",
    },
    paddingBottom: "2.5rem",
    paddingTop: "2.5rem",
  }));

  const HeroContentTile = styled(ArgonTypography)(({ theme }) => ({
    color: theme.palette.web.cream,
    fontFamily: "Bugaki,gelica,system-os",
    fontSize: "calc(1.375rem + 1.5vw)",
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: "1rem",

    "@media (min-width: 1200px)": {
      fontSize: "4rem",
    },

    "@media (min-width: 768px)": {
      fontSize: "3rem",
      marginBottom: "1.5rem",
    },

    "@media (max-width: 639.98px)": {
      fontSize: "calc(1.75rem + 3.3vw)",
      textAlign: "center",
    },
  }));

  return (
    <>
      <ArgonBox className="hero-front">
        <>
          <Grid container>
            <Grid item md={6} xs={12} className="image-col" p={0}>
              <ArgonBox className="image-wrapper">
                <ArgonBox
                  className="bg-image"
                  component="img"
                  src={HeroImage}
                />{" "}
              </ArgonBox>
            </Grid>
            <Grid item md={6} xs={12} className="content-col" p={0}>
              <ArgonBox className="content-wrapper">
                <ArgonTypography className="hero-title">
                  Life is better at the cottage.
                </ArgonTypography>{" "}
                <ArgonBox className="button-group">
                  <ArgonButton>Shop All</ArgonButton>
                  <ArgonButton variant="outlined">
                    Shop by community
                  </ArgonButton>
                </ArgonBox>
              </ArgonBox>
            </Grid>
          </Grid>
        </>
      </ArgonBox>
    </>
  );
};

export default Hero;
