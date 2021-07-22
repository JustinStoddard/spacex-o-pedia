import React, { useState } from 'react';
import {
  makeStyles,
  createStyles,
  Avatar,
  Backdrop,
  useMediaQuery,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Person, Fingerprint, Cancel, Public, Favorite } from '@material-ui/icons';
import { SpeedDial, SpeedDialAction } from '@material-ui/lab';
import { useAuth0 } from '@auth0/auth0-react';

import getEnvVar from '../../../Helpers/getEnvVar';

interface UserMenuProps {

};

const useStyles = makeStyles((theme) => createStyles({
  navButton: {
    color: "#fff",
    border: "2px solid #fff",
    fontWeight: 700,
    textTransform: "uppercase",
    fontFamily: theme.appDrawer.fonts?.primary,
    "@media (max-width: 850px)": {
      paddingTop: "3px",
      paddingBottom: "3px"
    }
  },
  avatar: {
    cursor: "pointer",
    height: "65px",
    width: "65px",
    background: "#000"
  },
  speedDialRoot: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    "@media (max-width: 850px)": {
      bottom: "15px",
      right: "15px",
    }
  },
  speedDialFab: {
    background: "#fff",
    "&:hover": {
      background: "#fff",
    }
  },
  backDrop: {
    zIndex: 2
  },
  navToolTip: {
    background: "#0009",
    color: "#fff",
    fontFamily: theme.appDrawer.fonts?.primary,
    fontSize: "11px",
    padding: "4px 8px",
    borderRadius: "5px",
    fontWeight: 700,
  },
  navIcon: {
    color: "#000"
  }
}));

const UserMenu = ({}: UserMenuProps) => {
  const classes = useStyles();
  const { logout, loginWithRedirect, user, isAuthenticated } = useAuth0();
  const [open, setOpen] = useState<boolean>(false);
  const env = getEnvVar('NODE_ENV');
  const isTablet = useMediaQuery('(max-width: 850px)');
  const history = useHistory();

  const isProd = env === "production";

  const handleNavClose = (name: string) => {
    switch (name) {
      case "Login":
        loginWithRedirect();
        break;
      case "Logout":
        isProd ? logout({ returnTo: "https://space-x-opedia.herokuapp.com" }) : logout({ returnTo: "http://localhost:3000" });
        break;
      case "Home":
        history.push("/");
        break;
      case "About":
        history.push("/about");
        break;
      case "Favorites":
        history.push("/favorites")
        break;
      default:
    };
    setOpen(false);
  };

  const actions = [
    {
      icon: isAuthenticated ? <Cancel color="inherit" className={classes.navIcon} /> : <Fingerprint color="inherit" className={classes.navIcon} />,
      name: isAuthenticated ? 'Logout' : 'Login',
    },
    {
      icon: <Favorite color="inherit" className={classes.navIcon} />,
      name: "Favorites"
    },
    {
      icon: <Person color="inherit" className={classes.navIcon} />,
      name: 'About'
    },
    {
      icon: <Public color="inherit" className={classes.navIcon} />,
      name: 'Home',
    }
  ];

  return (
    <>
      <Backdrop
        open={open}
        onClick={() => setOpen(false)}
        className={classes.backDrop}
      />
      <SpeedDial
        classes={{
          root: classes.speedDialRoot,
          fab: classes.speedDialFab
        }}
        ariaLabel="Nav SpeedDial"
        onClick={() => setOpen(!open)}
        open={open}
        direction="up"
        transitionDuration={0}
        icon={
          <>
            {user?.picture ? (
              <Avatar
                alt={user?.name}
                src={user?.picture}
                className={classes.avatar}
              />
            ) : (
              <Avatar className={classes.avatar}>
                <Person />
              </Avatar>
            )}
          </>
        }
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen={isTablet}
            classes={{
              staticTooltipLabel: classes.navToolTip
            }}
            TooltipClasses={{
              tooltip: classes.navToolTip
            }}
            onClick={() => handleNavClose(action.name)}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default UserMenu;