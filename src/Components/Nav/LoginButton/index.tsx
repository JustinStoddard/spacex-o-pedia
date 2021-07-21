import React from 'react';
import {
  makeStyles,
  createStyles,
  Button,
} from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
interface LoginButtonProps {

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

const LoginButton = ({}: LoginButtonProps) => {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      data-testid="nav-login-button"
      className={classes.navButton}
      onClick={() => loginWithRedirect()}
    >
      Login
    </Button>
  );
};

export default LoginButton;