import React, { useState } from 'react';
import {
  CircularProgress,
} from '@material-ui/core';
import { useStyles } from './DataRendererStyles';

interface ImageProps {
  img?: string;
}

const Image = ({ img }: ImageProps) => {
  const classes = useStyles();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <img
        src={img}
        alt={img}
        className={`${classes.bigImage} ${imageLoaded ? classes.bigImageLoaded : ""}`}
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && (
        <CircularProgress size={20} thickness={6} color="inherit" className={classes.imageWhiteLoader} />
      )}
    </>
  );
};

export default Image;