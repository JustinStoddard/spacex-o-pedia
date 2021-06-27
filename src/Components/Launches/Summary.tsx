import React from 'react';
import {
  Grid
} from '@material-ui/core';
import { useStyles } from './DataRendererStyles';
import moment from 'moment';

interface SummaryProps {
  details?: any;
}

const Summary = ({ details }: SummaryProps) => {
  const classes = useStyles();
  const { name, date_local, upcoming, success, links } = details;
  const time = moment(date_local).format('LLL');

  return (
    <Grid container spacing={1} className={classes.summaryGrid}>
      {links?.patch?.small && (
        <Grid item xs={12} sm={1}>
          <div className={classes.summaryPatchContainer}>
            <img
              src={links?.patch?.small}
              alt={name}
              className={classes.summaryPatch}
            />
          </div>
        </Grid>
      )}
      <Grid item xs={12} sm={3}>
        <div>
          <div className={classes.summaryHeaderLabel}>name</div>
          <div className={classes.summaryHeader}>{name}</div>
        </div>
      </Grid>
      <Grid item xs={12} sm={3}>
        <div>
          <div className={classes.summaryHeaderLabel}>time</div>
          <div className={classes.summaryHeader}>{time}</div>
        </div>
      </Grid>
      <Grid item xs={12} sm={2}>
        {upcoming ? (
          <div>
            <div className={classes.summaryHeaderLabel}>upcoming</div>
            <div className={classes.summaryHeader}>{`${upcoming}`}</div>
          </div>
        ) : (
          <div>
            <div className={classes.summaryHeaderLabel}>success</div>
            <div className={classes.summaryHeader}>{`${success}`}</div>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default Summary;