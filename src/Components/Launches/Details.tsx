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
import { useStyles } from './DataRendererStyles';
import Core from './Core';
import Capsule from './Capsule';
import Crew from './Crew';
import Payload from './Payload';
import LaunchPad from './LaunchPad';

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
    payloads,
    launchpad,
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
      {crew.length > 0 && (
        <Grid item xs={12} className={classes.detailsContainer}>
          <div className={classes.detailsHeader}>Crew [{crew.length}]</div>
          <Grid container spacing={2}>
            {crew.map((item: string) => {
              return (
                <Grid item key={item}>
                  <Crew crew={item} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      )}
      {launchpad !== null && (
        <Grid item xs={12} className={classes.detailsContainer}>
          <div className={classes.detailsHeader}>Launch Pad</div>
          <LaunchPad launchpad={launchpad} />
        </Grid>
      )}
      {(fairings?.recovered && fairings?.recovery_attempt && fairings?.reused) && (
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
      {capsules.length > 0 && (
        <Grid item xs={12} className={classes.detailsContainer}>
          <div className={classes.detailsHeader}>Capsules</div>
          <Capsule capsule={capsules[0]} />
        </Grid>
      )}
      {payloads.length > 0 && (
        <Grid item xs={12} className={classes.detailsContainer}>
          <div className={classes.detailsHeader}>Payloads [{payloads.length}]</div>
          {payloads.map((item: any, index: number) => {
            return (
              <div key={index}>
                {index !== 0 && <div className={classes.dividerHidden} />}
                <div className={classes.detailsHeaderGroup}>Payload {index + 1}</div>
                <Payload payload={item} />
              </div>
            );
          })}
        </Grid>
      )}
      {cores.length > 0 && (
        <Grid item xs={12} className={classes.detailsContainer}>
          <div className={classes.detailsHeader}>Cores [{cores.length}]</div>
          {cores.map((item: any, index: number) => {
            return (
              <div key={index}>
                {index !== 0 && <div className={classes.dividerHidden} />}
                <div className={classes.detailsHeaderGroup}>Core {index + 1}</div>
                <Core core={item} />
              </div>
            );
          })}
        </Grid>
      )}
    </Grid>
  );
};

export default Details;