import React from 'react';
import {
  makeStyles,
  createStyles,
  Grid,
} from '@material-ui/core';

import Nav from '../Components/Nav/Nav';
import Launches from '../Components/Launches/Launches';

interface LaunchesPageProps {

};

const useStyles = makeStyles(theme => createStyles({

}));

const LaunchesPage = ({}: LaunchesPageProps) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Nav />
      </Grid>
      <Grid item xs={12}>
        <Launches />
      </Grid>
    </Grid>
  );
};

export default LaunchesPage;