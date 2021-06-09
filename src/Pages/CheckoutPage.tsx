import React from 'react';
import {
  makeStyles,
  createStyles,
  Grid,
} from '@material-ui/core';

import Nav from '../Components/Nav/Nav';
import Checkout from '../Components/Checkout/Checkout';

interface CheckoutPageProps {

};

const useStyles = makeStyles(theme => createStyles({

}));

const CheckoutPage = ({}: CheckoutPageProps) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Nav />
      </Grid>
      <Grid item xs={12}>
        <Checkout />
      </Grid>
    </Grid>
  );
};

export default CheckoutPage;