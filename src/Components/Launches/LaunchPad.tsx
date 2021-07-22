import React, { useEffect, useState, useCallback } from 'react';
import {
  Paper,
  Grid,
  CircularProgress,
  useMediaQuery,
} from '@material-ui/core';
import MapBoxGl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { useStyles } from './DataRendererStyles';
import useFetchData from '../../Services/hooks/useFetchData';

interface LaunchProps {
  launchpad?: string;
}

const LaunchPad = ({ launchpad }: LaunchProps) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [{ isFetching, result }, getData] = useFetchData("launchpads", launchpad);
  const [mapRef, setMapRef] = useState<any>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    if (mounted) getData();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (result?.longitude && result?.latitude) {
      MapBoxGl.accessToken = process.env.REACT_APP_MAP_TOKEN ?? "";
      const map = new MapBoxGl.Map({
        container: "launch-pad-map",
        center: [result?.longitude, result?.latitude],
        zoom: 15,
        pitch: 10,
        bearing: 40,
        style: `mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y`,
        hash: false,
        attributionControl: false,
      });

      map.addControl(
        new MapBoxGl.ScaleControl({
          maxWidth: 150,
          unit: "imperial",
        }),
        "bottom-right"
      );

      const marker = new MapBoxGl.Marker({
        color: "#000"
      }).setLngLat([result?.longitude, result?.latitude]).addTo(map);

      map.scrollZoom.disable();
      setMapRef(map);
    }
  }, [result, isMobile]);

  const onFocusEvent = useCallback(() => {
    mapRef.scrollZoom.enable();
  }, [mapRef]);

  const onBlurEvent = useCallback(() => {
    mapRef.scrollZoom.disable();
  }, [mapRef]);


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
            <div className={classes.paperHeader}>name</div>
            <div className={classes.paperData}>{result?.name ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.full_name !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>full name</div>
            <div className={classes.paperData}>{result?.full_name ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.locality !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>locality</div>
            <div className={classes.paperData}>{result?.locality ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.region !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>region</div>
            <div className={classes.paperData}>{result?.region ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.status !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>status</div>
            <div className={classes.paperData}>{result?.status ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.launch_attempts !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>launch attempts</div>
            <div className={classes.paperData}>{result?.launch_attempts ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.launch_successes !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>launch successes</div>
            <div className={classes.paperData}>{result?.launch_successes ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {result?.details !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>details</div>
            <div className={`${classes.paperData} ${classes.noTextTransform}`}>{result?.details ?? "N/A"}</div>
          </Paper>
        </Grid>
      )}
      {(result?.longitude && result?.latitude) && (
        <Grid item xs={12}>
          <div className={classes.mapContainer}>
            <div
              id="launch-pad-map"
              className={classes.map}
              onFocus={() => onFocusEvent()}
              onBlur={() => onBlurEvent()}
            />
          </div>
        </Grid>
      )}
    </Grid>
  );
};

export default LaunchPad;