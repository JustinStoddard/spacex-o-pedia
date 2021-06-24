import React from 'react';
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
import Core from './Core';
import Capsule from './Capsule';
import Crew from './Crew';

interface DetailsProps {
  details?: any;
}

const Details = ({ details }: DetailsProps) => {
  const classes = useStyles();
  const {
    details: _details,
    fairings,
    cores,
    capsules,
    crew,
  } = details;

  console.log(details)

  return (
    <Grid container spacing={2}>
      {_details && (
        <Grid item xs={12} className={classes.detailsContainer}>
          <div className={classes.detailsHeader}>Details</div>
          <div className={classes.detailsText}>{_details}</div>
        </Grid>
      )}
      {fairings && (
        <Grid item xs={12} sm={6} md={4} className={classes.detailsContainer}>
          <div className={classes.detailsHeader}>Fairings</div>
          <TableContainer component={Paper} className={classes.table}>
            <Table>
              <TableBody>
                <TableRow className={classes.tableRow}>
                  <TableCell className={classes.tableHeader}>RECOVERED</TableCell>
                  <TableCell align="right" className={classes.tableData}>{`${fairings?.recovered ?? "N/A"}`}</TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                  <TableCell className={classes.tableHeader}>RECOVERY ATTEMPT</TableCell>
                  <TableCell align="right" className={classes.tableData}>{`${fairings?.recovery_attempt ?? "N/A"}`}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.tableHeader}>REUSED</TableCell>
                  <TableCell align="right" className={classes.tableData}>{`${fairings?.reused ?? "N/A"}`}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      )}
      {crew.length > 0 && (
        <Grid item xs={12} className={classes.detailsContainer}>
          <div className={classes.detailsHeader}>Crew [{crew.length}]</div>
          <Grid container spacing={2}>
            {crew.map((item: string) => {
              return <Crew key={item} crew={item} />;
            })}
          </Grid>
        </Grid>
      )}
      {capsules.length > 0 && (
        <Grid item xs={12} className={classes.detailsContainer}>
          <div className={classes.detailsHeader}>Capsules</div>
          <Capsule capsule={capsules[0]} />
        </Grid>
      )}
      {cores.length > 0 && (
        <Grid item xs={12} className={classes.detailsContainer}>
          <div className={classes.detailsHeader}>Cores [{cores.length}]</div>
          <div className={classes.detailsHeaderGroup}>Core 1</div>
          <Core core={cores[0]} />
          {cores.length > 1 && (
            <>
              <div className={classes.dividerHidden} />
              <div className={classes.detailsHeaderGroup}>Core 2</div>
              <Core core={cores[1]} />
            </>
          )}
          {cores.length > 2 && (
            <>
              <div className={classes.dividerHidden} />
              <div className={classes.detailsHeaderGroup}>Core 3</div>
              <Core core={cores[2]} />
            </>
          )}
        </Grid>
      )}
    </Grid>
  );
};

export default Details;