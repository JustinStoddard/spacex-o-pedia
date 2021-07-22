import React from 'react';
import {
  makeStyles,
  createStyles,
  Grid,
} from '@material-ui/core';

import Nav from '../Components/Nav/Nav';

interface AboutPageProps {

};

const useStyles = makeStyles(theme => createStyles({

}));

const AboutPage = ({}: AboutPageProps) => {
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

export default AboutPage;