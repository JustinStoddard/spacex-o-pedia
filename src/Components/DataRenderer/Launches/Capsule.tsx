import React, { useEffect } from 'react';
import {
  Grid,
  Paper,
} from '@material-ui/core';
import { useStyles } from '../DataRendererStyles';
import useFetchData from '../../../Services/hooks/useFetchData';

interface CapsuleProps {
  capsule?: string;
}

const Capsule = ({ capsule }: CapsuleProps) => {
  const classes = useStyles();
  const [{ result }, getData] = useFetchData("capsules", capsule);

  useEffect(() => {
    let mounted = true;

    getData();

    return () => {
      mounted = false;
    }
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Paper className={classes.paper}>
          <div className={classes.paperHeader}>SERIAL</div>
          <div className={classes.paperData}>{result?.serial ?? "N/A"}</div>
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.paper}>
          <div className={classes.paperHeader}>TYPE</div>
          <div className={classes.paperData}>{result?.type ?? "N/A"}</div>
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.paper}>
          <div className={classes.paperHeader}>STATUS</div>
          <div className={classes.paperData}>{result?.status ?? "N/A"}</div>
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.paper}>
          <div className={classes.paperHeader}>REUSE COUNT</div>
          <div className={classes.paperData}>{result?.reuse_count ?? "N/A"}</div>
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.paper}>
          <div className={classes.paperHeader}>WATER LANDINGS</div>
          <div className={classes.paperData}>{result?.water_landings ?? "N/A"}</div>
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.paper}>
          <div className={classes.paperHeader}>LAND LANDINGS</div>
          <div className={classes.paperData}>{result?.land_landings ?? "N/A"}</div>
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.paper}>
          <div className={classes.paperHeader}>LAST UPDATE</div>
          <div className={classes.paperData}>{result?.last_update ?? "N/A"}</div>
        </Paper>
      </Grid>
    </Grid>
  )
};

export default Capsule;