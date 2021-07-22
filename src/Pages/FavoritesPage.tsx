import React from 'react';
import {
  makeStyles,
  createStyles,
  Grid,
} from '@material-ui/core';

import Nav from '../Components/Nav/Nav';

interface FavoritesPageProps {

};

const useStyles = makeStyles(theme => createStyles({

}));

const FavoritesPage = ({}: FavoritesPageProps) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Nav />
      </Grid>
      <Grid item xs={12}>
      </Grid>
    </Grid>
  );
};

export default FavoritesPage;