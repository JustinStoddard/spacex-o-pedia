interface FilterParams {
  result?: any;
  filteredResults?: any;
  searchValue?: string;
  category?: string;
}

const getFilters = ({ result, searchValue, category }: FilterParams) => {
  let newResults = Object.keys(result).reverse();
  let usableCategory = category?.toLowerCase();

  if (searchValue) {
    //For search
    newResults = newResults.filter((key: string) => {
      const item = result[key];
  
      if (item.name.toLowerCase().match(searchValue?.toLowerCase())) {
        return key;
      }
    });
  }

  switch (usableCategory) {
    case "crew":
      newResults = newResults.filter((key: string) => {
        const item = result[key];
        const matchesCrew = item.name.toLowerCase().match(usableCategory);
        const matchesOtherCrewMissions = item.name.toLowerCase().match("cctcap")
    
        if (matchesCrew || matchesOtherCrewMissions) {
          return key;
        }
      });
      break;
    case "inspiration":
      newResults = newResults.filter((key: string) => {
        const item = result[key];
    
        if (item.name.toLowerCase().match(usableCategory)) {
          return key;
        }
      });
      break;
    case "iridium":
      newResults = newResults.filter((key: string) => {
        const item = result[key];
    
        if (item.name.toLowerCase().match(usableCategory)) {
          return key;
        }
      });
      break;
    case "nrol":
      newResults = newResults.filter((key: string) => {
        const item = result[key];
    
        if (item.name.toLowerCase().match(usableCategory)) {
          return key;
        }
      });
      break;
    case "starlink":
      newResults = newResults.filter((key: string) => {
        const item = result[key];
    
        if (item.name.toLowerCase().match(usableCategory)) {
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