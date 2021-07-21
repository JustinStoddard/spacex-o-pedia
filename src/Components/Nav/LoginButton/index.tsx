import React from 'react';
import {
  makeStyles,
  createStyles,
  Button,
} from '@material-ui/core';

interface LoginButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
  }
}));

const LoginButton = ({ onClick }: LoginButtonProps) => {
  const classes = useStyles();

  return (
    <Button
      data-testid="nav-login-button"
      className={classes.navButton}
      onClick={onClick}
    >
      Login
    </Button>
  );
};

export default LoginButton;