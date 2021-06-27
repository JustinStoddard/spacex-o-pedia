import React, { useEffect } from 'react';
import {
  Grid,
  Paper,
} from '@material-ui/core';
import { useStyles } from '../DataRendererStyles';
import useFetchData from '../../../Services/hooks/useFetchData';

interface CrewProps {
  crew?: string;
}

const Crew = ({ crew }: CrewProps) => {
  const classes = useStyles();
  const [{ result }, getData] = useFetchData("crew", crew);

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
        <div className={classes.imageContainer}>
          <a href={result?.wikipedia ?? ""} target="_blank">
            <img src={result?.image ?? ""} alt={result?.name ?? "N/A"} className={classes.image} />
          </a>
        </div>
      </Paper>
      <div className={classes.paperImageHeader}>{result?.name ?? "N/A"}<br />{result?.agency ?? "N/A"}</div>
    </>
  );
};

export default Crew;