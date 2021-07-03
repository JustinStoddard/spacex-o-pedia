import React from 'react';
import {
  makeStyles,
  createStyles,
  Grid
} from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => createStyles({
  landingPageContainer: {
    padding: "30px",
    marginTop: "70px",
    "@media (max-width: 600px)": {
      padding: "25px 15px",
      marginTop: "55px",
    }
  },
  landingPageWelcomeBoxContainer: {
    background: "#000",
    width: "100%",
    padding: "30px",
    boxShadow: "-8px 8px 0px -1px #000000",
    borderLeft: "2px solid #fff",
    borderBottom: "2px solid #fff",
    borderRadius: "5px",
    marginBottom: "30px",
    maxWidth: "450px",
    "@media (max-width: 600px)": {
      padding: "15px",
      marginBottom: "25px"
    }
  },
  landingPageWelcomeBoxHeader: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "5px",
    fontFamily: theme.appDrawer.fonts.primary,
  },
  landingPageWelcomeBoxDescription: {
    color: "#fff",
    fontSize: "15px",
    fontWeight: 500,
    fontFamily: theme.appDrawer.fonts.primary,
  },
  landingHeader: {
    fontFamily: theme.appDrawer.fonts.primary,
    color: "#fff",
    background: "#000",
    fontSize: "20px",
    fontWeight: 600,
    boxShadow: "-8px 8px 0px -1px #000000",
    borderRadius: "5px",
    padding: "15px",
    border: "2px solid #fff",
    maxWidth: "700px",
    textTransform: "uppercase",
  },
  moreMarginAbove: {
    marginTop: "20px"
  },
  optionsContainer: {
    // maxWidth: "700px"
  },
  optionCardContainer: {
    background: "#fff",
    width: "100%",
    height: "150px",
    padding: "10px",
    boxShadow: "-8px 8px 0px -1px #000000",
    border: "2px solid #000",
    borderRadius: "5px",
    maxWidth: "450px",
    cursor: "pointer",
    transition: "0.3s",
    transform: "translate(0px, 0px)",
    "@media (max-width: 600px)": {
      padding: "15px",
    },
    "&:hover": {
      transition: "0.3s",
      transform: "translate(5px, -5px)",
      boxShadow: "-13px 13px 0px 0px #000000",
    }
  },
  optionCardText: {
    color: "#000",
    fontSize: "20px",
    fontWeight: 500,
    fontFamily: theme.appDrawer.fonts.primary,
  },
  optionCardContainerDisabled: {
    background: "#000",
    width: "100%",
    padding: "10px",
    boxShadow: "-8px 8px 0px -1px #000000",
    borderLeft: "2px solid #fff",
    borderBottom: "2px solid #fff",
    borderRight: "0px",
    borderTop: "0px",
    borderRadius: "5px",
    marginBottom: "30px",
    maxWidth: "450px",
    cursor: "not-allowed",
    transition: "0.3s",
    transform: "translate(0px, 0px)",
    opacity: "0.5",
    "@media (max-width: 600px)": {
      padding: "15px",
      marginBottom: "15px"
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const launchOptions = [
    {
      name: "All",
    },
    {
      name: "Crew",
    },
    {
      name: "Inspiration"
    },
    {
      name: "Starlink",
    },
    {
      name: "Resupply",
    },
    {
      name: "Spaceforce",
    },
    {
      name: "Iridium",
    },
    {
      name: "NROL",
    },
  ];

  const rocketOptions = [
    {
      name: "Falcon 1",
    },
    {
      name: "Falcon 9",
    },
    {
      name: "Falcon Heavy",
    },
    {
      name: "Starship",
    }
  ];

  return (
    <div className={classes.landingPageContainer}>
      <div className={classes.landingPageWelcomeBoxContainer}>
        <div className={classes.landingPageWelcomeBoxHeader}>Welcome Explorer!</div>
        <div className={classes.landingPageWelcomeBoxDescription}>This is the spacexopedia! A place for all curious eyes to get an even closer look at all things SpaceX! Expect to find all sorts of data! Info on specific launches, telemetry, payloads and more! Enjoy!</div>
      </div>
      <Grid container spacing={3} className={classes.optionsContainer}>
        <Grid item xs={12}>
          <div className={classes.landingHeader}>Official Launches</div>
        </Grid>
        {launchOptions.map((option, index) => {
          const prettyLinkParam = option.name.replace(/ /g, "").toLowerCase();
          
          return (
            <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
              <button
                type="button"
                className={classes.optionCardContainer}
                onClick={() => history.push(`/launches/${prettyLinkParam}`)}
              >
                <div className={classes.optionCardText}>{option.name}</div>
              </button>
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <div className={classes.landingHeader}>Rockets</div>
        </Grid>
        {rocketOptions.map((option, index) => {
          const prettyLinkParam = option.name.replace(/ /g, "").toLowerCase();
          
          return (
            <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
              <button
                type="button"
                className={classes.optionCardContainer}
                onClick={() => history.push(`/rockets/${prettyLinkParam}`)}
              >
                <div className={classes.optionCardText}>{option.name}</div>
              </button>
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <div className={classes.landingHeader}>Roadster</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;