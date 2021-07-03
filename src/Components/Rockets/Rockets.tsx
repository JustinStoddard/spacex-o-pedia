import React, { useEffect } from 'react';
import {
  makeStyles,
  createStyles,
  Grid,
  CircularProgress,
} from '@material-ui/core';
import { Error } from '@material-ui/icons';
import { useParams } from 'react-router-dom';

import useFetchData from '../../Services/hooks/useFetchData';
import Rocket from './Rocket';

interface ParamsProps {
  rocket?: string;
}

const useStyles = makeStyles((theme) => createStyles({
  viewContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "calc(100vh - 70px)",
    "@media (max-width: 600px)": {
      height: "calc(100vh - 50px)",
    }
  },
  loaderText: {
    fontFamily: theme.appDrawer.fonts.primary,
    fontSize: "20px",
    fontWeight: 600,
    color: "#000",
    marginTop: "5px"
  },
  launchesLoader: {
    color: "#000",
    animationDuration: '1400ms'
  },
  circle: {
    strokeLinecap: 'round',
  },
  errorIcon: {
    fontSize: "40px",
    color: "#ff0000"
  }
}));

const Rockets = ({}) => {
  const classes = useStyles();
  const [{ isFetching, isSuccessful, errorMessage, result }, getData] = useFetchData("rockets");
  const params = useParams<ParamsProps>();

  useEffect(() => {
    let mounted = true;

    getData();

    return () => {
      mounted = false;
    }
  }, []);

  return (
    <Grid container>
      {isFetching && (
        <Grid item xs={12} data-testid="rockets-loader">
          <div className={classes.viewContainer}>
            <CircularProgress
              size={35}
              thickness={4}
              color="inherit"
              classes={{
                circle: classes.circle
              }}
              className={classes.launchesLoader}
            />
            <div className={classes.loaderText}>Loading Info About {params.rocket}</div>
          </div>
        </Grid>
      )}
      {errorMessage && (
        <Grid item xs={12} data-testid="rockets-error">
          <div className={classes.viewContainer}>
            <Error fontSize="inherit" color="inherit" className={classes.errorIcon} />
            <div className={classes.loaderText}>There was an issue fetching info about {params.rocket}</div>
            <div className={classes.loaderText}>{errorMessage}</div>
          </div>
        </Grid>
      )}
      {(isSuccessful && result) && (
        <Grid item xs={12} data-testid="rockets-success">
          <Rocket result={result} rocket={params.rocket} />
        </Grid>
      )}
    </Grid>
  );
};

export default Rockets;