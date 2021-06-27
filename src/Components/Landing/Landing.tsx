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
      padding: "25px 15px"
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
  optionsContainer: {
    maxWidth: "700px"
  },
  optionCardContainer: {
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
    cursor: "pointer",
    transition: "0.3s",
    transform: "translate(0px, 0px)",
    "@media (max-width: 600px)": {
      padding: "15px",
      marginBottom: "15px"
    },
    "&:hover": {
      transition: "0.3s",
      transform: "translate(5px, -5px)",
      boxShadow: "-13px 13px 0px 0px #000000",
    }
  },
  optionCardText: {
    color: "#fff",
    fontSize: "15px",
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

  const options = [
    {
      name: "All",
      disabled: false,
    },
    {
      name: "Crew",
      disabled: false,
    },
    {
      name: "Starlink",
      disabled: false,
    },
    {
      name: "Spaceforce",
      disabled: false,
    },
  ];

  return (
    <div className={classes.landingPageContainer}>
      <div className={classes.landingPageWelcomeBoxContainer}>
        <div className={classes.landingPageWelcomeBoxHeader}>Welcome Explorer!</div>
        <div className={classes.landingPageWelcomeBoxDescription}>This is the spacexopedia! A place for all curious eyes to get an even closer look at all things SpaceX! Expect to find all sorts of data! Info on specific launches, telemetry, payloads and more! Enjoy!</div>
      </div>
      <Grid container spacing={3} className={classes.optionsContainer}>
        {options.map((option, index) => {
          const prettyLinkParam = option.name.replace(/ /g, "").toLowerCase();
          
          if (option.disabled) return (
            <Grid item key={index}>
              <button
                type="button"
                className={classes.optionCardContainerDisabled}
              >
                <div className={classes.optionCardText}>{option.name}</div>
              </button>
            </Grid>
          );
          return (
            <Grid item key={index}>
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
      </Grid>
    </div>
  );
};

export default LandingPage;