import React, { useEffect, useCallback } from 'react';
import {
  makeStyles,
  createStyles,
  Grid,
} from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import { useHistory } from 'react-router';

import getFilters from './getFilters';
import RocketData from './RocketData';

interface RocketProps {
  result?: any;
  rocket?: string;
}

const useStyles = makeStyles((theme) => createStyles({
  dataContainer: {
    padding: "0px 30px 30px 30px",
    "@media (max-width: 600px)": {
      padding: "0px 15px 15px 15px",
    }
  },
  checkoutBackButton: {
    background: "#000",
    padding: "10px",
    boxShadow: "-8px 8px 0px -1px #000000",
    borderLeft: "2px solid #fff",
    borderBottom: "2px solid #fff",
    borderRight: "0px",
    borderTop: "0px",
    borderRadius: "5px",
    marginBottom: "25px",
    marginRight: "15px",
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
  checkoutHeader: {
    background: "#000",
    width: "100%",
    padding: "15px",
    boxShadow: "-8px 8px 0px -1px #000000",
    borderLeft: "2px solid #fff",
    borderBottom: "2px solid #fff",
    borderRight: "0px",
    borderTop: "0px",
    borderRadius: "5px",
    marginBottom: "25px",
    display: "flex",
    alignItems: "center",
    transition: "0.3s",
    transform: "translate(0px, 0px)",
  },
  checkoutCardText: {
    color: "#fff",
    fontSize: "15px",
    fontWeight: 700,
    fontFamily: theme.appDrawer.fonts.primary,
    textTransform: "uppercase",
  },
  checkoutHeaderContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "95px",
    paddingLeft: "30px",
    paddingRight: "30px",
    zIndex: 5,
    "@media (max-width: 850px)": {
      marginTop: "75px",
    },
    "@media (max-width: 600px)": {
      paddingLeft: "15px",
      paddingRight: "15px",
    },
  },
  checkoutHeaderLeftContainer: {
    display: "flex",
  },
  checkoutHeaderIcon: {
    color: "#fff",
    fontSize: "30px",
  },
}));

const Rocket = ({ result, rocket }: RocketProps) => {
  const classes = useStyles();
  const history = useHistory();
  
  const generateResults = useCallback(() => {
    let filteredResults;

    filteredResults = getFilters({ result, rocket });

    return {
      filteredResults,
    };
  }, [result]);

  const { filteredResults } = generateResults();

  return (
    <>
      <Grid container className={classes.checkoutHeaderContainer}>
        <Grid item xs={12} sm={4}>
          <div className={classes.checkoutHeaderLeftContainer}>
            <button
              type="button"
              className={classes.checkoutBackButton}
              onClick={() => history.push('/')}
            >
              <ChevronLeft fontSize="inherit" color="inherit" className={classes.checkoutHeaderIcon} />
            </button>
            <div className={classes.checkoutHeader}>
              <div className={classes.checkoutCardText}>{rocket}</div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={classes.dataContainer}>
        {filteredResults.map((key: string, index: number) => {
          const item = result[key];

          return (
            <div key={item.id}>
              <RocketData item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Rocket;

