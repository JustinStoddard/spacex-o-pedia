import React from 'react';

interface SummaryProps {
  details?: any;
}

const Summary = ({ details }: SummaryProps) => {
  const { name } = details;
  return (
    <h1>{name}</h1>
  );
};

export default Summary;