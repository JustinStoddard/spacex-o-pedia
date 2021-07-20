import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    appDrawer: {
      palette: {
        primary: string;
        secondary: string
      }
      fonts: {
        primary: string
      }
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    appDrawer: {
      palette: {
        primary: string;
        secondary: string;
      }
      fonts: {
        primary: string;
      }
    }
  }
}

const createMyTheme = (options: ThemeOptions) => {
  return createMuiTheme({...options});
};

const theme = createMyTheme({
  appDrawer: {
    palette: {
      primary: "",
      secondary: "",
    },
    fonts: {
      primary: "Space Grotesk",
    }
  },
});

export default theme;