import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => createStyles({

}));

const NotFoundView = () => {
  const styles = useStyles();

  return (
    <h1>Not Found</h1>
  );
};

export default NotFoundView;