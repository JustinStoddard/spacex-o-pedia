import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { useHistory } from 'react-router';

import Image from '../../images/moonpicture.jpeg';

interface NavProps {

};

const useStyles = makeStyles(theme => createStyles({
  navContainer: {
    background: "#000",
    width: "100%",
    height: "70px",
    display: "flex",
    position: "fixed",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px 30px 30px 10px",
    boxShadow: "-8px 8px 0px -1px #000000",
    borderLeft: "1px solid #fff",
    borderBottom: "1px solid #fff",
    borderBottomRightRadius: "5px",
    zIndex: 5,
    "@media (max-width: 600px)": {
      padding: "15px 15px 15px 0px",
    }
  },
  navLogoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70px",
    height: "69px",
    position: "relative",
    overflow: "hidden"
  },
  navLogo: {
    position: "absolute",
    transform: "scale(0.4)",
  },
  navHeaderContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer"
  },
  navHeader: {
    fontSize: "30px",
    color: "#fff",
    fontWeight: 600,
    fontFamily: theme.appDrawer.fonts?.primary
  }
}));

const Nav = ({}: NavProps) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.navContainer}>
      <div className={classes.navHeaderContainer} tabIndex={0} onClick={() => history.push("/")}>
        <div className={classes.navLogoContainer}>
          <img src={Image} className={classes.navLogo} />
        </div>
        <div className={classes.navHeader}>space|x|opedia</div>
      </div>
    </div>
  );
};

export default Nav;