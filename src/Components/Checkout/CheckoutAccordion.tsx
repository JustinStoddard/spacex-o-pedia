import React from 'react';
import {
  makeStyles,
  createStyles,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

interface CheckoutAccordionProps {
  result: any;
}

const useStyles = makeStyles(theme => createStyles({
  accordionContainer: {
    padding: "30px",
    "@media (max-width: 600px)": {
      padding: "30px 15px",
    }
  }
}));

const CheckoutAccordion = ({ result }: CheckoutAccordionProps) => {
  const classes = useStyles();
  const results = Object.keys(result).reverse();

  console.log("accordion", result);

  return (
    <div className={classes.accordionContainer}>
      {results.map((key: any) => {
        const item = result[key];
        return (
          <Accordion key={key}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <div>{item.mission_name}</div>
            </AccordionSummary>
            <AccordionDetails>

            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default CheckoutAccordion;