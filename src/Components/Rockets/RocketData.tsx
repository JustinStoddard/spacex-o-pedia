import React, { useRef } from 'react';
import {
  makeStyles,
  createStyles,
  Grid,
  Paper,
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
    position: "relative",
    marginBottom: "10px",
    marginTop: "10px"
  },
  mediaSlider: {
    minHeight: "65vh",
    maxHeight: "65vh",
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
    minHeight: "65vh",
    maxHeight: "65vh",
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
  },
  bigImageLoaded: {
    height: "100%"
  },
  header: {
    fontFamily: theme.appDrawer.fonts.primary,
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: "18px",
    marginBottom: "5px",
  },
  text: {
    fontFamily: theme.appDrawer.fonts.primary,
    fontWeight: 500,
    fontSize: "13px",
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "space-between",
    padding: "15px",
    flexDirection: "column",
    boxShadow: "-8px 8px 0px -1px #000000",
    border: "2px solid #000",
    "@media (max-width: 600px)": {
      marginLeft: "0px",
    }
  },
  paperHeader: {
    fontFamily: theme.appDrawer.fonts.primary,
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: "13px",
    lineHeight: 1
  },
  paperData: {
    fontFamily: theme.appDrawer.fonts.primary,
    fontWeight: 500,
    fontSize: "11px",
    textTransform: "uppercase",
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
    height,
    landing_legs,
    mass,
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
      {description !== undefined && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>description</div>
            <div className={classes.paperData}>{description}</div>
          </Paper>
        </Grid>
      )}
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
      {active !== undefined && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>active</div>
            <div className={classes.paperData}>{`${active}`}</div>
          </Paper>
        </Grid>
      )}
      {company !== undefined && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>company</div>
            <div className={classes.paperData}>{`${company}`}</div>
          </Paper>
        </Grid>
      )}
      {country !== undefined && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>country</div>
            <div className={classes.paperData}>{country}</div>
          </Paper>
        </Grid>
      )}
      {cost_per_launch !== undefined && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>cost per launch</div>
            <div className={classes.paperData}>{`$${cost_per_launch.toLocaleString()}`}</div>
          </Paper>
        </Grid>
      )}
      {engines !== undefined && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>engine type</div>
            <div className={classes.paperData}>{engines.type}</div>
          </Paper>
        </Grid>
      )}
      {landing_legs !== undefined && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>num of landing legs</div>
            <div className={classes.paperData}>{landing_legs.number}</div>
          </Paper>
        </Grid>
      )}
      {boosters !== undefined && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>boosters</div>
            <div className={classes.paperData}>{boosters}</div>
          </Paper>
        </Grid>
      )}
      {success_rate_pct !== undefined && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>success rate pct</div>
            <div className={classes.paperData}>{success_rate_pct}</div>
          </Paper>
        </Grid>
      )}
      {stages !== undefined && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>stages</div>
            <div className={classes.paperData}>{stages}</div>
          </Paper>
        </Grid>
      )}
      {first_flight !== undefined && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>first flight</div>
            <div className={classes.paperData}>{first_flight}</div>
          </Paper>
        </Grid>
      )}
      {height !== undefined && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>height</div>
            <div className={classes.paperData}>{`METRIC: ${height.meters}m`}</div>
            <div className={classes.paperData}>{`IMPERIAL: ${height.feet}ft`}</div>
          </Paper>
        </Grid>
      )}
      {diameter !== undefined && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>diameter</div>
            <div className={classes.paperData}>{`METRIC: ${diameter.meters}m`}</div>
            <div className={classes.paperData}>{`IMPERIAL: ${diameter.feet}ft`}</div>
          </Paper>
        </Grid>
      )}
      {mass !== undefined && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>mass</div>
            <div className={classes.paperData}>{`KGS: ${mass.kg.toLocaleString()}`}</div>
            <div className={classes.paperData}>{`LBS: ${mass.lb.toLocaleString()}`}</div>
          </Paper>
        </Grid>
      )}
      {wikipedia !== undefined && (
        <Grid item>
          <Paper className={classes.paper}>
            <div className={classes.paperHeader}>wikipedia</div>
            <div className={classes.paperData}>
              <a href={wikipedia}>Click Me</a>
            </div>
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default RocketData;