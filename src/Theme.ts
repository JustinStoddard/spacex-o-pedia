import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface ThemeOptions {    
    [key: string]: any;
  }
}

const palette = {
  primary: {
    main: "#ff0000"
  }
};

const themeName = 'spacex-o-pedia theme';

export default createMuiTheme({ palette, themeName });