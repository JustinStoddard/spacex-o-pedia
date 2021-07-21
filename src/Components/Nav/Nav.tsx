import React from 'react';
import {
  makeStyles,
  createStyles,
  Button,
} from '@material-ui/core';
import { useHistory } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from './LoginButton/index';
import UserMenu from './UserMenu';
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
    borderLeft: "2px solid #fff",
    borderBottom: "2px solid #fff",
    borderBottomRightRadius: "5px",
    zIndex: 5,
    "@media (max-width: 850px)": {
      padding: "15px 15px 15px 0px",
      height: "50px",
    }
  },
  navLogoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70px",
    height: "68px",
    position: "relative",
    overflow: "hidden",
    "@media (max-width: 850px)": {
      width: "60px",
      height: "48px",
    }
  },
  navLogo: {
    position: "absolute",
    transform: "scale(0.4)",
    "@media (max-width: 850px)": {
      transform: "scale(0.3)",
    }
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
    fontWeight: 700,
    textTransform: "uppercase",
    fontFamily: theme.appDrawer.fonts?.primary,
    "@media (max-width: 850px)": {
      fontSize: "25px",
    }
  },
}));

const Nav = ({}: NavProps) => {
  const classes = useStyles();
  const history = useHistory();
  const { logout, isAuthenticated } = useAuth0();

  return (
    <div className={classes.navContainer}>
      <div className={classes.navHeaderContainer} tabIndex={0} onClick={() => history.push("/")}>
        <div className={classes.navLogoContainer}>
          <img src={Image} className={classes.navLogo} />
        </div>
        <div className={classes.navHeader}>space|x|opedia</div>
      </div>
      {isAuthenticated ? (
        <UserMenu />
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default Nav;