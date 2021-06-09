import React from 'react';
import {
  makeStyles,
  createStyles,
  Grid,
} from '@material-ui/core';

import Landing from '../Components/Landing/Landing';
import Nav from '../Components/Nav/Nav';

interface LandingPageProps {

};

const useStyles = makeStyles(theme => createStyles({

}));

const LandingPage = ({}: LandingPageProps) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Nav />
      </Grid>
      <Grid item xs={12}>
        <Landing />
      </Grid>
    </Grid>
  );
};

export default LandingPage;