import React from 'react';
import {
  makeStyles,
  createStyles,
  Grid,
} from '@material-ui/core';

interface RocketDataProps {
  item?: any;
}

const useStyles = makeStyles((theme) => createStyles({

}));

const RocketData = ({ item }: RocketDataProps) => {
  const classes = useStyles();

  console.log(item)

  return (
    <Grid container>

    </Grid>
  );
};

export default RocketData;