import React, { useState, useCallback, useEffect } from 'react';
import {
  makeStyles,
  createStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { ExpandMore, ChevronLeft } from '@material-ui/icons';
import DataRenderer from '../DataRenderer/DataRenderer';
import { useHistory } from 'react-router';

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
  checkoutBackButtonContainer: {
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
    marginTop: "95px",
    marginLeft: "30px",
    zIndex: 5,
    "@media (max-width: 600px)": {
      marginLeft: "15px",
    },
  },
  checkoutHeaderIcon: {
    color: "#fff",
    fontSize: "30px"
  },
  paginationContainer: {
    padding: "0px 30px 30px 27px",
    "@media (max-width: 600px)": {
      padding: "15px 15px 30px 15px",
    }
  }
}));

const CheckoutAccordion = ({ result, category }: CheckoutAccordionProps) => {
  const classes = useStyles();
  const results = Object.keys(result).reverse();
  const history = useHistory();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [expanded, setExpanded] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([0, (isMobile ? 2 : 9)]);
  const count = Math.round(results.length / (isMobile ? 3 : 8));

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

    return filteredResults;
  }, [pagination]);

  const handlePaginationChange = (e: any, value: any) => {
    const start = (value - 1) * (isMobile ? 3 : 10);
    const end = start + (isMobile ? 2 : 9);
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
      <div className={classes.checkoutHeaderContainer}>
        <button
          type="button"
          className={classes.checkoutBackButtonContainer}
          onClick={() => history.push('/')}
        >
          <ChevronLeft fontSize="inherit" color="inherit" className={classes.checkoutHeaderIcon} />
        </button>
        <div className={classes.checkoutHeader}>
          <div className={classes.checkoutCardText}>{category}</div>
        </div>
      </div>
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
          onChange={handlePaginationChange}
        />
      </div>
    </>
  );
};

export default CheckoutAccordion;