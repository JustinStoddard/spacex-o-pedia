import React, { useEffect, useState, useCallback } from 'react';
import {
  Paper,
  Grid,
  useMediaQuery,
} from '@material-ui/core';
import MapBoxGl from "mapbox-gl";
import { useStyles } from '../DataRendererStyles';
import useFetchData from '../../../Services/hooks/useFetchData';

interface LaunchProps {
  launchpad?: string;
}

const LaunchPad = ({ launchpad }: LaunchProps) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [{ result }, getData] = useFetchData("launchpads", launchpad);
  const [mapRef, setMapRef] = useState<any>(null);

  useEffect(() => {
    let mounted = true;

    getData();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (result?.longitude && result?.latitude) {
      MapBoxGl.accessToken = "pk.eyJ1IjoiYmx1ZXJvb2YzNjAiLCJhIjoiY2prOHB1am40MDNlYjNwczBtN3V6ZG01dCJ9.IPRccV7flof-4CpZIbgcqg";
      const map = new MapBoxGl.Map({
        container: "launch-pad-map",
        center: [-102.166260, 40.562259],
        zoom: 3,
        pitch: 0,
        bearing: 0,
        style: `mapbox://styles/mapbox/dark-v10?fresh=true?optimize=true`,
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

      //Add building layer
      map.on('load', () => {
        var layers: any = map.getStyle().layers;
        var labelLayerId;
        for (var i = 0; i < layers.length; i++) {
          if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
          }
        }

        map.addLayer(
          {
            'id': 'add-3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 14,
            'paint': {
              'fill-extrusion-color': '#aaa',
              'fill-extrusion-height': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'height']
              ],
              'fill-extrusion-base': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'min_height']
              ],
              'fill-extrusion-opacity': 0.6
            }
          },
          labelLayerId
        );
      });

      const marker = new MapBoxGl.Marker({
        color: "#000"
      }).setLngLat([result?.longitude, result?.latitude]).addTo(map);

      map.scrollZoom.disable();
      setMapRef(map);
    }
  }, [result, isMobile]);

  useEffect(() => {
    if (mapRef) {
      mapRef.flyTo({
        center: [result?.longitude, result?.latitude],
        zoom: 16,
        pitch: 60,
        bearing: -60,
        speed: 0.8,
        curve: 1.42
      });
    }
  }, [mapRef]);

  const onFocusEvent = useCallback(() => {
    mapRef.scrollZoom.enable();
  }, [mapRef]);

  const onBlurEvent = useCallback(() => {
    mapRef.scrollZoom.disable();
  }, [mapRef]);

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
      <Grid item xs={12} sm={6}>
        <div className={classes.bigImageContainer}>
          <img src={result?.images?.large[0]} alt={result?.name} className={classes.bigImage} />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className={classes.mapContainer}>
          <div
            id="launch-pad-map"
            className={classes.map}
            onFocus={() => onFocusEvent()}
            onBlur={() => onBlurEvent()}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default LaunchPad;