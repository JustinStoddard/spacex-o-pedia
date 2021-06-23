import React from 'react';

interface DetailsProps {
  details?: any;
}

const Details = ({ details }: DetailsProps) => {
  const {} = details;

  console.log(details)

  return (
    <h1>Details</h1>
  );
};

export default Details;