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
    case "crew":
      newResults = newResults.filter((key: string) => {
        const item = result[key];
        const matchesCrew = item.name.toLowerCase().match(category);
        const matchesOtherCrewMissions = item.name.toLowerCase().match("cctcap")
    
        if (matchesCrew || matchesOtherCrewMissions) {
          return key;
        }
      });
      break;
    case "inspiration":
      newResults = newResults.filter((key: string) => {
        const item = result[key];
    
        if (item.name.toLowerCase().match(category)) {
          return key;
        }
      });
      break;
    case "iridium":
      newResults = newResults.filter((key: string) => {
        const item = result[key];
    
        if (item.name.toLowerCase().match(category)) {
          return key;
        }
      });
      break;
    case "nrol":
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
    case "resupply":
    newResults = newResults.filter((key: string) => {
      const item = result[key];
  
      if (item.name.toLowerCase().match("crs")) {
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