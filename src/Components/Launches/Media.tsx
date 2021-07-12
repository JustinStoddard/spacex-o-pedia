import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import {
  Grid,
  Paper,
} from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import { useStyles } from './DataRendererStyles';
import Image from '../Common/Image';

interface MediaProps {
  links?: any;
}

const Media = ({ links }: MediaProps) => {
  const classes = useStyles();
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: false,
    arrows: false,
    swipe: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const prevImage = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const nextImage = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <Grid container spacing={2}>
      {links?.youtube_id !== null && (
        <Grid item xs={12} sm={12} md={6}>
          <div className={classes.mediaIframeContainer}>
            <iframe
              className={classes.mediaIframe}
              src={`https://www.youtube.com/embed/${links.youtube_id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </Grid>
      )}
      {links?.flickr?.original.length > 0 && (
        <Grid item xs={12} sm={12} md={6} className={classes.mediaSliderContainer}>
          <div
            className={`${classes.arrowContainer} ${classes.mediaBackArrow}`}
            onClick={() => prevImage()}
          >
            <ChevronLeft fontSize="inherit" color="inherit" />
          </div>
          <Slider {...settings} className={classes.mediaSlider} ref={sliderRef}>
            {links.flickr.original.map((item: string, index: number) => {
              return (
                <div key={index}>
                  <div className={classes.mediaImageContainer}>
                    <Image
                      img={item}
                      defaultClass={classes.bigImage}
                      loadedClass={classes.bigImageLoaded}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
          <div
            className={`${classes.arrowContainer} ${classes.mediaNextArrow}`}
            onClick={() => nextImage()}
          >
            <ChevronRight fontSize="inherit" color="inherit" />
          </div>
        </Grid>
      )}
      {links?.wikipedia !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>wikipedia</div>
            <div className={classes.paperData}>
              <a href={links.wikipedia} target="_blank">See wiki</a>
            </div>
          </Paper>
        </Grid>
      )}
      {links?.article !== null && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>article</div>
            <div className={classes.paperData}>
              <a href={links?.article} target="_blank">See article</a>
            </div>
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default Media;