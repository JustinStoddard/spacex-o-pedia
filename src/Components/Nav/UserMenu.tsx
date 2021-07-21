import React, { useState } from 'react';
import {
  makeStyles,
  createStyles,
  Button,
  Avatar,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { Person } from '@material-ui/icons';
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
    border: "2px solid #fff",
    height: "50px",
    width: "50px",
    "@media (max-width: 850px)": {
      height: "35px",
      width: "35px",
    }
  }
}));

const UserMenu = ({}: UserMenuProps) => {
  const classes = useStyles();
  const { logout, user } = useAuth0();
  const [anchorEl, setAnchorEl] = useState<any>(null);

  const handleMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    setAnchorEl(null);
  };

  return (
    <>
      {user?.picture ? (
        <Avatar
          alt={user?.name}
          src={user?.picture}
          onClick={handleMenuOpen}
          className={classes.avatar}
        />
      ) : (
        <Avatar
          onClick={handleMenuOpen}
          className={classes.avatar}
        >
          <Person />
        </Avatar>
      )}
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;