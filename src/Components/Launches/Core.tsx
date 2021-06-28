import React, { useEffect } from 'react';
import { 
  Paper,
  Grid,
  CircularProgress,
} from '@material-ui/core';
import { useStyles } from './DataRendererStyles';
import useFetchData from '../../Services/hooks/useFetchData';

interface CoresProps {
  core?: any;
}

const Core = ({ core }: CoresProps) => {
  const classes = useStyles();
  const [{ isFetching, result }, getData] = useFetchData("cores", core.core);

  useEffect(() => {
    let mounted = true;

    if (core.core) {
      getData();
    }

    return () => {
      mounted = false;
    }
  }, []);

  console.log(result)

  if (isFetching) {
    return (
      <Grid container spacing={2}>
        <Grid item>
          <CircularProgress size={20} thickness={6} className={classes.loaderBlack} />
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid container spacing={2}>
      {result?.serial !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>SERIAL</div>
            <div className={classes.paperData}>{result?.serial ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {core?.landing_success !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>LANDING SUCCESS</div>
            <div className={classes.paperData}>{`${core?.landing_success ?? "N/A"}`}</div>
          </Paper>
        </Grid>
      )}
      {core?.reused !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>REUSED</div>
            <div className={classes.paperData}>{`${core?.reused ?? "N/A"}`}</div>
          </Paper>
        </Grid>
      )}
      {core?.flight !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>NUM OF FLIGHTS</div>
            <div className={classes.paperData}>{core?.flight ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.status !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>STATUS</div>
            <div className={classes.paperData}>{result?.status ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {core?.landing_type !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>LANDING TYPE</div>
            <div className={classes.paperData}>{`${core?.landing_type ?? "N/A"}`}</div>
          </Paper>
        </Grid>
      )}
      {result?.last_update !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>LAST UPDATE</div>
            <div className={classes.paperData}>{result?.last_update ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {core?.legs !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>LEGS</div>
            <div className={classes.paperData}>{`${core?.legs ?? "N/A"}`}</div>
          </Paper>
        </Grid>
      )}
      {core?.gridfins !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>GRIDFINS</div>
            <div className={classes.paperData}>{`${core?.gridfins ?? "N/A"}`}</div>
          </Paper>
        </Grid>
      )}
      {core?.result?.reuse_count !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>REUSE COUNT</div>
            <div className={classes.paperData}>{result?.reuse_count ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.rtls_landings !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>RTLS LANDINGS</div>
            <div className={classes.paperData}>{result?.rtls_landings ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.asds_landings !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>ASDS LANDINGS</div>
            <div className={classes.paperData}>{result?.asds_landings ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default Core;