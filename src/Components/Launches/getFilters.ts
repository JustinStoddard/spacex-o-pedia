interface FilterParams {
  result?: any;
  filteredResults?: any;
  searchValue?: string;
  category?: string;
}

const getFilters = ({ result, filteredResults, searchValue, category }: FilterParams) => {
  let newResults = filteredResults;
  let usableCategory = category?.toLowerCase();

  //For search
  newResults = newResults.filter((key: string) => {
    const item = result[key];

    if (item.name.toLowerCase().match(searchValue?.toLowerCase())) {
      return key;
    }
  });

  switch (usableCategory) {
    case "all":
      //Do nothing
      break;
    case "crew":
      newResults = newResults.filter((key: string) => {
        const item = result[key];
    
        if (item.name.toLowerCase().match(category)) {
          return key;
        }
      });
      break;
    case "starlink":
      newResults = newResults.filter((key: string) => {
        const item = result[key];
    
        if (item.name.toLowerCase().match(category)) {
          return key;
        }
      });
      break;
    case "spaceforce":
      newResults = newResults.filter((key: string) => {
        const item = result[key];
    
        if (item.name.toLowerCase().match("ussf")) {
          return key;
        }
      });
      break;
    default:
  };

  return newResults;
};

export default getFilters;