interface FilterParams {
  result?: any;
  rocket?: string;
}

const getFilters = ({ result, rocket }: FilterParams) => {
  let newResults = Object.keys(result).reverse();
  let usableRocket = rocket?.toLowerCase();

  switch (usableRocket) {
    case "falcon1":
      newResults = newResults.filter((key: string) => {
        const item = result[key];

        if (item.name.toLowerCase().replace(/ /g, "").match(usableRocket)) {
          return key;
        }
      });
      break;
    case "falcon9":
      newResults = newResults.filter((key: string) => {
        const item = result[key];

        if (item.name.toLowerCase().replace(/ /g, "").match(usableRocket)) {
          return key;
        }
      });
      break;
    case "falconheavy":
      newResults = newResults.filter((key: string) => {
        const item = result[key];

        if (item.name.toLowerCase().replace(/ /g, "").match(usableRocket)) {
          return key;
        }
      });
      break;
    case "starship":
      newResults = newResults.filter((key: string) => {
        const item = result[key];

        if (item.name.toLowerCase().replace(/ /g, "").match(usableRocket)) {
          return key;
        }
      });
      break;
    default:
  };

  return newResults;
};

export default getFilters