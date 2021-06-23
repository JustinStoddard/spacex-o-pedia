interface FilterParams {
  category?: string;
  result?: any;
  filteredResults?: any;
  searchValue?: string;
}

const getFilters = ({ category, result, filteredResults, searchValue }: FilterParams) => {
  let newResults = filteredResults;

  switch (category) {
    case "launches":
      newResults = newResults.filter((key: string) => {
        const item = result[key];
  
        if (item.name.toLowerCase().match(searchValue?.toLowerCase())) {
          return key;
        }
      });
      break;
  };

  return newResults;
};

export default getFilters;