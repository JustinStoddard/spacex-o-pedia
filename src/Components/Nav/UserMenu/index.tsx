import React, { useState } from 'react';
import {
  makeStyles,
  createStyles,
  Avatar,
  Backdrop,
} from '@material-ui/core';
import { Person, AddCircle, Cancel } from '@material-ui/icons';
import { SpeedDial, SpeedDialAction } from '@material-ui/lab';
import { useAuth0 } from '@auth0/auth0-react';

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
  }
}));

const UserMenu = ({}: UserMenuProps) => {
  const classes = useStyles();
  const { logout, loginWithRedirect, user, isAuthenticated } = useAuth0();
  const [open, setOpen] = useState<boolean>(false);

  const handleNavClose = (name: string) => {
    switch (name) {
      case "Login":
        loginWithRedirect();
        setOpen(false);
        break;
      case "Logout":
        logout();
        setOpen(false);
        break;
      default:
    };
  };

  const actions = [
    {
      icon: isAuthenticated ? <Cancel /> : <AddCircle />,
      name: isAuthenticated ? 'Logout' : 'Login'
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
            onClick={() => handleNavClose(action.name)}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default UserMenu;