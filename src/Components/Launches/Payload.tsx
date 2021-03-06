import React, { useEffect } from 'react';
import {
  Paper,
  Grid,
  CircularProgress,
} from '@material-ui/core';
import { useStyles } from './DataRendererStyles';
import useFetchData from '../../Services/hooks/useFetchData';
import moment from 'moment';

interface PayloadProps {
  payload?: string;
}

const Payload = ({ payload }: PayloadProps) => {
  const classes = useStyles();
  const [{ isFetching, result }, getData] = useFetchData("payloads", payload);

  useEffect(() => {
    let mounted = true;

    if (mounted) getData();

    return () => {
      mounted = false;
    };
  }, []);

  const time = moment(result?.epoch).format('LLL');

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
      {result?.name !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>NAME</div>
            <div className={classes.paperData}>{result?.name ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.type !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>TYPE</div>
            <div className={classes.paperData}>{result?.type ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.reused !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>REUSED</div>
            <div className={classes.paperData}>{`${result?.reused}` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {(result?.mass_kg !== null && result?.mass_lbs !== null) && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>MASS LAUNCHED</div>
            <div className={classes.paperData}>{`KG: ${result?.mass_kg}` ?? "N/A"}</div>
            <div className={classes.paperData}>{`LBS: ${result?.mass_lbs}` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {(result?.dragon?.mass_returned_kg !== null && result?.dragon?.mass_returned_lbs !== null) && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>MASS RETURNED</div>
            <div className={classes.paperData}>{`KG: ${result?.dragon?.mass_returned_kg}` ?? "N/A"}</div>
            <div className={classes.paperData}>{`LBS: ${result?.dragon?.mass_returned_lbs}` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.orbit !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>ORBIT</div>
            <div className={classes.paperData}>{`${result?.orbit}` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.regime !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>REGIME</div>
            <div className={classes.paperData}>{`${result?.regime}` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.reference_system !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>REFERENCE SYSTEM</div>
            <div className={classes.paperData}>{`${result?.reference_system}` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.longitude !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>LONGITUDE</div>
            <div className={classes.paperData}>{`${result?.longitude}` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.semi_major_axis_km !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>SEMI MAJOR AXIS</div>
            <div className={classes.paperData}>{`${result?.semi_major_axis_km} km` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.eccentricity !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>ECCENTRICITY</div>
            <div className={classes.paperData}>{`${result?.eccentricity}` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.periapsis_km !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>PERIAPSIS</div>
            <div className={classes.paperData}>{`${result?.periapsis_km} km` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.apoapsis_km !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>apoapsis</div>
            <div className={classes.paperData}>{`${result?.apoapsis_km} km` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.inclination_deg !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>inclination deg</div>
            <div className={classes.paperData}>{`${result?.inclination_deg} km` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.period_min !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>period</div>
            <div className={classes.paperData}>{`${result?.period_min} min` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.lifespan_years !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>lifespan</div>
            <div className={classes.paperData}>{`${result?.lifespan_years} yrs` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.epoch !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>epoch</div>
            <div className={classes.paperData}>{`${time}` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.mean_motion !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>mean motion</div>
            <div className={classes.paperData}>{`${result?.mean_motion}` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.raan !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>RAAN</div>
            <div className={classes.paperData}>{`${result?.raan}` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.arg_of_pericenter !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>arg of pericenter</div>
            <div className={classes.paperData}>{`${result?.arg_of_pericenter}` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.mean_anomaly !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>mean anomaly</div>
            <div className={classes.paperData}>{`${result?.mean_anomaly}` ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.customers.length > 0 && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>customers</div>
            {result?.customers.map((item: string) => {
              return <div key={item} className={classes.paperData}>{`${item}` ?? "N/A"}</div>;
            })}
          </Paper>
        </Grid>
      )}
      {result?.norad_ids.length > 0 && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>NORAD IDS</div>
            {result?.norad_ids.map((item: string) => {
              return <div key={item} className={classes.paperData}>{`${item}` ?? "N/A"}</div>;
            })}
          </Paper>
        </Grid>
      )}
      {result?.nationalities.length > 0 && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>NATIONALITIES</div>
            {result?.nationalities.map((item: string) => {
              return <div key={item} className={classes.paperData}>{`${item}` ?? "N/A"}</div>;
            })}
          </Paper>
        </Grid>
      )}
      {result?.manufacturers.length > 0 && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>MANUFACTURERS</div>
            {result?.manufacturers.map((item: string) => {
              return <div key={item} className={classes.paperData}>{`${item}` ?? "N/A"}</div>;
            })}
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default Payload;