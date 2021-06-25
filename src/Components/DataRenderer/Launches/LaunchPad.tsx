import React, { useEffect } from 'react';
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from '@material-ui/core';
import { useStyles } from '../DataRendererStyles';
import useFetchData from '../../../Services/hooks/useFetchData';

interface LaunchProps {
  launchpad?: string;
}

const LaunchPad = ({ launchpad }: LaunchProps) => {
  const classes = useStyles();
  const [{ result }, getData] = useFetchData("launchpad", launchpad);

  useEffect(() => {
    let mounted = true;

    getData();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Grid></Grid>
  );
};

export default LaunchPad;