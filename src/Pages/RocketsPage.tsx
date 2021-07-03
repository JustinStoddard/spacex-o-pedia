import React from 'react';
import {
  makeStyles,
  createStyles,
  Grid,
} from '@material-ui/core';

import Nav from '../Components/Nav/Nav';
import Rockets from '../Components/Rockets/Rockets';

interface RocketsPageProps {

};

const useStyles = makeStyles(theme => createStyles({

}));

const RocketsPage = ({}: RocketsPageProps) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Nav />
      </Grid>
      <Grid item xs={12}>
        <Rockets />
      </Grid>
    </Grid>
  );
};

export default RocketsPage;