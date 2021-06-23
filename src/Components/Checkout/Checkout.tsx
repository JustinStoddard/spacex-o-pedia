import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import {
  makeStyles,
  createStyles,
  Grid,
  CircularProgress,
} from '@material-ui/core';
import { Error } from '@material-ui/icons';

import useFetchData from '../../Services/hooks/useFetchData';
import CheckoutAccordion from './CheckoutAccordion';

interface CheckoutProps {

};

interface ParamTypes {
  category?: string;
}

const useStyles = makeStyles(theme => createStyles({
  viewContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "calc(100vh - 70px)",
  },
  loaderText: {
    fontFamily: theme.appDrawer.fonts.primary,
    fontSize: "20px",
    fontWeight: 600,
    color: "#000",
    marginTop: "5px"
  },
  checkoutLoader: {
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

const Checkout = ({}: CheckoutProps) => {
  const classes = useStyles();
  const params = useParams<ParamTypes>();
  const category = params?.category ?? "";
  const [{ isFetching, isSuccessful, errorMessage, result }, getData] = useFetchData(category);

  useEffect(() => {
    let mounted = true;

    getData();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Grid container>
      {isFetching && (
        <Grid item xs={12} data-testid="checkout-loader">
          <div className={classes.viewContainer}>
            <CircularProgress
              size={35}
              thickness={4}
              color="inherit"
              classes={{
                circle: classes.circle
              }}
              className={classes.checkoutLoader}
            />
            <div className={classes.loaderText}>Loading {category}</div>
          </div>
        </Grid>
      )}
      {errorMessage && (
        <Grid item xs={12} data-testid="checkout-error">
          <div className={classes.viewContainer}>
            <Error fontSize="inherit" color="inherit" className={classes.errorIcon} />
            <div className={classes.loaderText}>There was an issue fetching {category}</div>
            <div className={classes.loaderText}>{errorMessage}</div>
          </div>
        </Grid>
      )}
      {(isSuccessful && result) && (
        <Grid item xs={12} data-testid="checkout-success">
          <CheckoutAccordion result={result} category={category} />
        </Grid>
      )}
    </Grid>
  );
};

export default Checkout;