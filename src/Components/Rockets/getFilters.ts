interface FilterParams {
  result?: any;
  filteredResults?: any;
  rocket?: string;
}

const getFilters = ({ result, filteredResults, rocket }: FilterParams) => {
  let newResults = filteredResults;
  let usableRocket = rocket?.toLowerCase();

  switch (usableRocket) {
    case "falcon1":
      newResults = newResults.filter((key: string) => {
        const item = result[key];

        if (item.name.toLowerCase().replace(/ /g, "").match(rocket)) {
          return key;
        }
      });
      break;
    case "falcon9":
      newResults = newResults.filter((key: string) => {
        const item = result[key];

        if (item.name.toLowerCase().replace(/ /g, "").match(rocket)) {
          return key;
        }
      });
      break;
    case "falconheavy":
      newResults = newResults.filter((key: string) => {
        const item = result[key];

        if (item.name.toLowerCase().replace(/ /g, "").match(rocket)) {
          return key;
        }
      });
      break;
    case "starship":
      newResults = newResults.filter((key: string) => {
        const item = result[key];

        if (item.name.toLowerCase().replace(/ /g, "").match(rocket)) {
          return key;
        }
      });
      break;
    default:
  };

  return newResults;
};

export default getFilters