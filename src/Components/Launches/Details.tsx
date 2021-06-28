import React, { useState } from 'react';
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Grid,
  CircularProgress,
} from '@material-ui/core';
import { useStyles } from './DataRendererStyles';
import Core from './Core';
import Capsule from './Capsule';
import Crew from './Crew';
import Payload from './Payload';
import LaunchPad from './LaunchPad';
import Media from './Media';

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
    links,
    name,
  } = details;
  const [imageLoaded, setImageLoaded] = useState(false);

  console.log(details)

  return (
    <Grid container spacing={2}>
      {links?.patch?.small && (
        <Grid item xs={12} sm={2}>
          <div className={classes.detailsPatchContainer}>
            <img
              src={links?.patch?.small}
              alt={name}
              className={`${classes.detailsPatch} ${imageLoaded ? classes.detailsPatchLoaded : ""}`}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <CircularProgress size={20} thickness={6} className={classes.loaderBlack} />
            )}
          </div>
        </Grid>
      )}
      {_details && (
        <Grid item xs={12} sm={10} className={`${classes.detailsContainer} ${classes.addFlex}`}>
          <div className={classes.detailsHeader}>Details</div>
          <div className={classes.detailsText}>{_details}</div>
        </Grid>
      )}
      {(
        !links.flickr.original.length &&
        links.youtube_id === null &&
        links?.wikipedia === null &&
        links?.article === null
      ) ? "" : (
        <Grid item xs={12} className={classes.detailsContainer}>
          <div className={classes.detailsHeader}>Media</div>
          <Media links={links} />
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