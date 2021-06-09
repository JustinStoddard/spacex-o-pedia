import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { useHistory, useParams } from 'react-router';

interface CheckoutProps {

};

interface ParamTypes {
  category?: string;
}

const useStyles = makeStyles(theme => createStyles({

}));

const Checkout = ({}: CheckoutProps) => {
  const classes = useStyles();
  const history = useHistory();
  const params = useParams<ParamTypes>();

  return (
    <div>
      <h1>{params.category}</h1>
    </div>
  );
};

export default Checkout;