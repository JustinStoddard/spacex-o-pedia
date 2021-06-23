import React, { useState, useCallback, useEffect } from 'react';
import {
  makeStyles,
  createStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Grid,
  useMediaQuery,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { ExpandMore, ChevronLeft } from '@material-ui/icons';
import { useHistory } from 'react-router';
import DataRenderer from '../DataRenderer/DataRenderer';
import getFilters from './getFilters';

interface CheckoutAccordionProps {
  result: any;
  category: string;
}

const useStyles = makeStyles(theme => createStyles({
  accordionContainer: {
    padding: "0px 30px 30px 30px",
    "@media (max-width: 600px)": {
      padding: "0px 15px 15px 15px",
    }
  },
  checkoutBackButton: {
    background: "#000",
    padding: "10px",
    boxShadow: "-8px 8px 0px -1px #000000",
    borderLeft: "1px solid #fff",
    borderBottom: "1px solid #fff",
    borderRight: "0px",
    borderTop: "0px",
    borderRadius: "5px",
    marginBottom: "30px",
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
    width: "250px",
    padding: "10px",
    boxShadow: "-8px 8px 0px -1px #000000",
    borderLeft: "1px solid #fff",
    borderBottom: "1px solid #fff",
    borderRight: "0px",
    borderTop: "0px",
    borderRadius: "5px",
    marginBottom: "30px",
    maxWidth: "450px",
    display: "flex",
    alignItems: "center",
    transition: "0.3s",
    transform: "translate(0px, 0px)",
    "@media (max-width: 600px)": {
      padding: "15px",
    },
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
    marginLeft: "30px",
    marginRight: "30px",
    zIndex: 5,
    "@media (max-width: 600px)": {
      marginLeft: "15px",
      marginRight: "15px",
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
  }
}));

const CheckoutAccordion = ({ result, category }: CheckoutAccordionProps) => {
  const classes = useStyles();
  const results = Object.keys(result).reverse();
  const history = useHistory();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const count = Math.round(results.length / (isMobile ? 4 : 8));
  const [expanded, setExpanded] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([0, (isMobile ? 3 : 9)]);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (panel: string) => (e: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : "");
  };

  const generateResults = useCallback(() => {
    let filteredResults = results;

    filteredResults = filteredResults.filter((key: string, index: number) => {
      const startBoundry = pagination[0];
      const endBoundry = pagination[1];
      if (index > startBoundry - 1 && index < endBoundry + 1) {
        return key;
      }
      return null;
    });

    filteredResults = getFilters({ category, results: filteredResults });

    return filteredResults;
  }, [pagination]);

  const handlePaginationChange = (e: any, value: any) => {
    const start = (value - 1) * (isMobile ? 4 : 10);
    const end = start + (isMobile ? 3 : 9);
    const newPagination = [start, end];
    setPagination(newPagination);
    setExpanded("");
    setPage(value);
  };

  useEffect(() => {
    handlePaginationChange("", page);
  }, [isMobile]);

  return (
    <>
      <Grid container className={classes.checkoutHeaderContainer}>
        <Grid item xs={12} sm={4} className={classes.checkoutHeaderLeftContainer}>
          <div className={classes.checkoutHeaderLeftContainer}>
            <button
              type="button"
              className={classes.checkoutBackButton}
              onClick={() => history.push('/')}
            >
              <ChevronLeft fontSize="inherit" color="inherit" className={classes.checkoutHeaderIcon} />
            </button>
            <div className={classes.checkoutHeader}>
              <div className={classes.checkoutCardText}>{category}</div>
            </div>
          </div>
        </Grid>
        {/* <Grid item xs={12} sm={8}>
          <TextField
            type="text"
            variant="outlined"
            placeholder={`Search ${category}`}
            value={searchValue}
            onChange={(e: any) => setSearchValue(e.target.value)}
          />
        </Grid> */}
      </Grid>
      <div className={classes.accordionContainer}>
        {generateResults().map((key: any, index: number) => {
          const item = result[key];

          return (
            <Accordion
              key={key}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              TransitionProps={{ unmountOnExit: true }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <DataRenderer category={category} type="summary" details={item} />
              </AccordionSummary>
              <AccordionDetails>
                <DataRenderer category={category} details={item} />
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
      <div className={classes.paginationContainer}>
        <Pagination
          count={count}
          variant="outlined"
          shape="rounded"
          className={classes.paginationControls}
          onChange={handlePaginationChange}
        />
      </div>
    </>
  );
};

export default CheckoutAccordion;