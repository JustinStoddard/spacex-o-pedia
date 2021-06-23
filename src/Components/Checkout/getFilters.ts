interface FilterParams {
  category?: string;
  results?: any;
}

const getFilters = ({ category, results }: FilterParams) => {
  return results;
};

export default getFilters;