import React, { useState, useCallback, useEffect } from 'react';
import {
  makeStyles,
  createStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  useMediaQuery,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { ExpandMore, ChevronLeft } from '@material-ui/icons';
import { useHistory } from 'react-router';

import LaunchSummary from './Summary';
import LaunchDetails from './Details';
import getFilters from './getFilters';

interface LaunchesAccordionProps {
  result: any;
  category?: string;
}

const useStyles = makeStyles((theme) => createStyles({
  accordionContainer: {
    padding: "0px 30px 30px 30px",
    "@media (max-width: 600px)": {
      padding: "0px 15px 15px 15px",
    }
  },
  accordion: {
    boxShadow: "-8px 8px 0px -1px #000000",
    borderRadius: "5px",
    border: "2px solid #000",
    margin: "15px 0px",
  },
  first: {
    marginTop: "0px"
  },
  accordionExpandIcon: {
    color: "#000"
  },
  checkoutBackButton: {
    background: "#000",
    padding: "10px",
    boxShadow: "-8px 8px 0px -1px #000000",
    borderLeft: "2px solid #fff",
    borderBottom: "2px solid #fff",
    borderRight: "0px",
    borderTop: "0px",
    borderRadius: "5px",
    marginBottom: "25px",
    marginRight: "15px",
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
    }
  },
  checkoutHeader: {
    background: "#000",
    width: "100%",
    padding: "15px",
    boxShadow: "-8px 8px 0px -1px #000000",
    borderLeft: "2px solid #fff",
    borderBottom: "2px solid #fff",
    borderRight: "0px",
    borderTop: "0px",
    borderRadius: "5px",
    marginBottom: "25px",
    display: "flex",
    alignItems: "center",
    transition: "0.3s",
    transform: "translate(0px, 0px)",
  },
  checkoutCardText: {
    color: "#fff",
    fontSize: "15px",
    fontWeight: 700,
    fontFamily: theme.appDrawer.fonts.primary,
    textTransform: "uppercase",
  },
  checkoutHeaderContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "95px",
    paddingLeft: "30px",
    paddingRight: "30px",
    zIndex: 5,
    "@media (max-width: 600px)": {
      paddingLeft: "15px",
      paddingRight: "15px",
    },
  },
  checkoutHeaderLeftContainer: {
    display: "flex",
  },
  checkoutHeaderIcon: {
    color: "#fff",
    fontSize: "30px",
  },
  paginationContainer: {
    padding: "0px 30px 30px 27px",
    "@media (max-width: 600px)": {
      padding: "15px 15px 30px 15px",
    }
  },
  paginationControls: {
    '& .MuiPaginationItem-root': {
      fontFamily: theme.appDrawer.fonts.primary,
    },
    '& .Mui-selected': {
      background: '#000',
      color:'#fff',
      fontFamily: theme.appDrawer.fonts.primary,
      fontWeight: 700,
      '&:hover': {
        background: '#000',
      }
    },
  },
  searchInputContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  searchInput: {
    padding: "15px 15px",
    fontSize: "15px",
    borderRadius: "5px",
    outline: "none",
    fontFamily: theme.appDrawer.fonts.primary,
    boxShadow: "-8px 8px 0px -1px #000000",
    border: "2px solid #000",
    appearance: "none",
    "@media (max-width: 600px)": {
      marginBottom: "30px",
      width: "100%"
    },
  },
}));

const LaunchesAccordion = ({ result, category }: LaunchesAccordionProps) => {
  const classes = useStyles();
  const results = Object.keys(result).reverse();
  const history = useHistory();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [expanded, setExpanded] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([0, (isMobile ? 2 : 9)]);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (panel: string) => (e: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : "");
  };

  const generateResults = useCallback(() => {
    let filteredResults = results;

    filteredResults = getFilters({ result, filteredResults, searchValue, category });

    let count = Math.round(filteredResults.length / (isMobile ? 3 : 10));
    count = isMobile ? count : count + 1;

    //For pagination
    filteredResults = filteredResults.filter((key: string, index: number) => {
      const startBoundry = pagination[0];
      const endBoundry = pagination[1];
      if (index > startBoundry - 1 && index < endBoundry + 1) {
        return key;
      }
      return null;
    });

    return {
      filteredResults,
      count,
    };
  }, [pagination, searchValue, isMobile]);

  const handlePaginationChange = (e: any, value: any) => {
    const start = (value - 1) * (isMobile ? 3 : 10);
    const end = start + (isMobile ? 2 : 9);
    const newPagination = [start, end];
    setPagination(newPagination);
    setExpanded("");
    setPage(value);
  };

  useEffect(() => {
    handlePaginationChange("", 1);
  }, [isMobile]);

  const { filteredResults, count } = generateResults();

  return (
    <>
      <Grid container className={classes.checkoutHeaderContainer}>
        <Grid item xs={12} sm={4}>
          <div className={classes.checkoutHeaderLeftContainer}>
            <button
              type="button"
              className={classes.checkoutBackButton}
              onClick={() => history.push('/')}
            >
              <ChevronLeft fontSize="inherit" color="inherit" className={classes.checkoutHeaderIcon} />
            </button>
            <div className={classes.checkoutHeader}>
              <div className={classes.checkoutCardText}>{category} Launches</div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.searchInputContainer}>
            <input
              type="text"
              value={searchValue}
              placeholder={`Search ${category} launches`}
              className={classes.searchInput}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </Grid>
      </Grid>
      <div className={classes.accordionContainer}>
        {filteredResults.map((key: any, index: number) => {
          const item = result[key];

          return (
            <Accordion
              key={key}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              TransitionProps={{ unmountOnExit: true }}
              className={`${classes.accordion} ${index === 0 ? classes.first : ""}`}
            >
              <AccordionSummary expandIcon={<ExpandMore fontSize={isMobile ? "large": "default"} color="inherit" className={classes.accordionExpandIcon} />}>
                <LaunchSummary details={item} />
              </AccordionSummary>
              <AccordionDetails>
                <LaunchDetails details={item} />
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
      <div className={classes.paginationContainer}>
        <Pagination
          count={count}
          page={page}
          variant="outlined"
          shape="rounded"
          className={classes.paginationControls}
          onChange={handlePaginationChange}
        />
      </div>
    </>
  );
};

export default LaunchesAccordion;