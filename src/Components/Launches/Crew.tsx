import React, { useEffect, useState } from 'react';
import {
  Paper,
  CircularProgress,
} from '@material-ui/core';
import { useStyles } from './DataRendererStyles';
import useFetchData from '../../Services/hooks/useFetchData';

interface CrewProps {
  crew?: string;
}

const Crew = ({ crew }: CrewProps) => {
  const classes = useStyles();
  const [{ isFetching, result }, getData] = useFetchData("crew", crew);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    getData();

    return () => {
      mounted = false;
    }
  }, []);

  return (
    <>
      <Paper className={classes.imagePaper}>
        <div className={`${classes.imageContainer} ${imageLoaded ? classes.imageLoaded : ""}`}>
          <a href={result?.wikipedia ?? ""} target="_blank">
            <img
              src={result?.image ?? ""}
              alt={result?.name ?? "N/A"}
              className={classes.image}
              onLoad={() => setImageLoaded(true)}
            />
          </a>
        </div>
        {!imageLoaded && (
          <CircularProgress size={20} thickness={6} color="inherit" className={classes.imageWhiteLoader} />
        )}
      </Paper>
      {!isFetching && (
        <div className={classes.paperImageHeader}>{result?.name ?? "N/A"}<br />{result?.agency ?? "N/A"}</div>
      )}
    </>
  );
};

export default Crew;