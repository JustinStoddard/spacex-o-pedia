import React from 'react';
import Slider from 'slick-carousel';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import {
  Paper,
  Grid,
  CircularProgress,
  useMediaQuery,
} from '@material-ui/core';
import { useStyles } from './DataRendererStyles';
import Image from './Image';

interface MediaProps {
  links?: any;
}

const Media = ({ links }: MediaProps) => {
  const classes = useStyles();
  const { flickr } = links;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Slider {...settings}>
          {flickr.original.map((item: string, index: number) => {
            return (
              <div key={index}>
                <div className={classes.bigImageContainer}>
                  <Image img={item} />
                </div>
              </div>
            );
          })}
        </Slider>
      </Grid>
    </Grid>
  );
};

export default Media;