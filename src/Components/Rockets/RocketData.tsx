import React, { useRef } from 'react';
import {
  makeStyles,
  createStyles,
  Grid,
} from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import Image from '../Common/Image';

interface RocketDataProps {
  item?: any;
}

const useStyles = makeStyles((theme) => createStyles({
  mediaSliderContainer: {
    position: "relative"
  },
  mediaSlider: {
    minHeight: "800px",
    maxHeight: "800px",
    boxShadow: "-8px 8px 0px -1px #000000",
    border: "2px solid #000",
    borderRadius: "5px",
    overflow: "hidden",
    "@media (max-width: 600px)": {
      marginLeft: "0px",
      minHeight: "400px",
      maxHeight: "400px",
    },
  },
  mediaImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "800px",
    maxHeight: "800px",
    overflow: "hidden",
    background: "#000",
    "@media (max-width: 600px)": {
      marginLeft: "0px",
      minHeight: "400px",
      maxHeight: "400px",
    }
  },
  arrowContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "-8px 8px 0px -1px #000000",
    border: "2px solid #fff",
    background: "#000",
    borderRadius: "5px",
    transition: "0.3s",
    transform: "translate(0px, 0px)",
    zIndex: 1,
    padding: "5px",
    cursor: "pointer",
    "&:hover": {
      transition: "0.3s",
      transform: "translate(5px, -5px)",
      boxShadow: "-13px 13px 0px 0px #000000",
    },
  },
  mediaNextArrow: {
    position: "absolute",
    fontSize: "25px",
    color: "#fff",
    top: "45%",
    right: "20px",
    "@media (max-width: 600px)": {
      top: "unset",
      bottom: "25px",
    }
  },
  mediaBackArrow: {
    position: "absolute",
    fontSize: "25px",
    color: "#fff",
    top: "45%",
    left: "30px",
    "@media (max-width: 600px)": {
      top: "unset",
      bottom: "25px"
    }
  },
  bigImage: {
    height: "0px",
    width: "100%",
    "@media (max-width: 600px)": {
      height: "400px !important",
      width: "unset"
    }
  },
  bigImageLoaded: {
    height: "inherit"
  },
}));

const RocketData = ({ item }: RocketDataProps) => {
  const classes = useStyles();
  const sliderRef = useRef<any>(null);

  const {
    flickr_images,
    active,
    boosters,
    company,
    cost_per_launch,
    country,
    description,
    diameter,
    engines,
    first_flight,
    first_stage,
    height,
    landing_legs,
    mass,
    payload_weights,
    second_stage,
    stages,
    wikipedia,
    success_rate_pct
  } = item;

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

  console.log(item)

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} className={classes.mediaSliderContainer}>
        <div
          className={`${classes.arrowContainer} ${classes.mediaBackArrow}`}
          onClick={() => prevImage()}
        >
          <ChevronLeft fontSize="inherit" color="inherit" />
        </div>
        <Slider {...settings} className={classes.mediaSlider} ref={sliderRef}>
          {flickr_images.map((item: string, index: number) => {
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
      <Grid item>

      </Grid>
    </Grid>
  );
};

export default RocketData;