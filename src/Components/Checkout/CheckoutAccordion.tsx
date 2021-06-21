import React, { useState } from 'react';
import {
  makeStyles,
  createStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import DataRenderer from '../DataRenderer/DataRenderer';

interface CheckoutAccordionProps {
  result: any;
  category: string;
}

const useStyles = makeStyles(theme => createStyles({
  accordionContainer: {
    padding: "30px",
    "@media (max-width: 600px)": {
      padding: "30px 15px",
    }
  }
}));

const CheckoutAccordion = ({ result, category }: CheckoutAccordionProps) => {
  const classes = useStyles();
  const results = Object.keys(result).reverse();
  const [expanded, setExpanded] = useState("");

  console.log("accordion", result);

  const handleChange = (panel: string) => (e: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : "");
  };

  return (
    <div className={classes.accordionContainer}>
      {results.map((key: any, index: number) => {
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
              <DataRenderer category={category} type="details" details={item} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default CheckoutAccordion;