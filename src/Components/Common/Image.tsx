import React, { useState } from 'react';
import {
  CircularProgress,
} from '@material-ui/core';
import { useStyles } from '../Launches/DataRendererStyles';

interface ImageProps {
  img?: string;
  defaultClass?: any;
  loadedClass?: any;
}

const Image = ({ img, defaultClass, loadedClass }: ImageProps) => {
  const classes = useStyles();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <img
        src={img}
        alt={img}
        className={`${defaultClass} ${imageLoaded ? loadedClass : ""}`}
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && (
        <CircularProgress size={20} thickness={6} color="inherit" className={classes.imageWhiteLoader} />
      )}
    </>
  );
};

export default Image;