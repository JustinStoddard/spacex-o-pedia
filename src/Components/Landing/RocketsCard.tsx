import React from 'react';
import {
  makeStyles,
  createStyles,
  Grid,
} from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import { useHistory } from 'react-router';

import getFilters from '../Rockets/getFilters';
import getAbreviation from '../../Helpers/getAbreviation';

interface RocketsCardProps {
  prettyLink: string;
  option: any;
  result: any;
};

const useStyles = makeStyles((theme) => createStyles({
  optionCardContainer: {
    position: "relative",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "150px",
    padding: "10px",
    boxShadow: "-8px 8px 0px -1px #000000",
    border: "2px solid #000",
    borderRadius: "5px",
    maxWidth: "450px",
    cursor: "pointer",
    transition: "0.3s",
    transform: "translate(0px, 0px)",
    "@media (max-width: 600px)": {
      padding: "15px",
    },
    "&:hover": {
      transition: "0.3s",
      transform: "translate(5px, -5px)",
      boxShadow: "-13px 13px 0px 0px #000000",
      "& $optionCardSubText": {
        transition: "0.3s",
        transform: "translate(3px, -3px)",
        boxShadow: "-8px 8px 0px 0px #000000",
      }
    }
  },
  optionCardText: {
    color: "#000",
    fontSize: "20px",
    fontWeight: 500,
    fontFamily: theme.appDrawer.fonts.primary,
  },
  optionCardSubText: {
    color: "#000",
    fontSize: "13px",
    fontWeight: 600,
    fontFamily: theme.appDrawer.fonts.primary,
    padding: "5px",
    boxShadow: "-4px 4px 0px -1px #000000",
    transition: "0.3s",
    transform: "translate(0px, -0px)",
    border: "2px solid #000",
    borderRadius: "5px",
    width: "fit-content",
    marginTop: "5px"
  },
  favoriteContainer: {
    position: "absolute",
    bottom: "5px",
    left: "10px"
  },
  favoriteIcon: {
    color: "#000",
    fontSize: "20px"
  },
  abreviationText: {
    color: "#000",
    fontSize: "11px",
    fontWeight: 600,
    fontFamily: theme.appDrawer.fonts.primary,
  }
}));

const RocketsCard = ({ prettyLink, option, result }: RocketsCardProps) => {
  const classes = useStyles();
  const history = useHistory();

  const rockets = getFilters({ result, rocket: option.name });
  console.log(option.name, rockets);
  const abreviation = getAbreviation(1456);

  console.log(result[rockets[2]]);

  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <button
        type="button"
        className={classes.optionCardContainer}
        onClick={() => history.push(`/rockets/${prettyLink}`)}
      >
        <div className={classes.optionCardText}>{option.name}</div>
        {/* <div className={classes.optionCardSubText}>{`-${count ?? "..."}-`}</div> */}
        <div className={classes.favoriteContainer}>
          <div className={classes.abreviationText}>{abreviation}</div>
          <Favorite color="inherit" fontSize="inherit" className={classes.favoriteIcon} />
        </div>
      </button>
    </Grid>
  );
};

export default RocketsCard;