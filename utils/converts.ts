/**
 * Convert a comma-separated string to an array.
 * @type {Function}
 * @param {string} string String to convert.
 * @param {boolean} deleteSpace Delete the spaces ? verdare - removes them, false - keeps them.
 * @returns {string[]} Returns the array.
 */
export const stringToArray = (
  string: string,
  deleteSpace: boolean = true
): string[] => {
  let newList = string.split(",");

  if (deleteSpace) {
    return newList.map((item) => {
      return item.replace(" ", "");
    });
  } else return newList;
};

/**
 * Convert to level string in new string with icons.
 * @type {Function}
 * @param {string} level String level
 * @returns {string} New string with icons.
 */
export const convertLevelToIcons = (level: string): string => {
  switch (level) {
    case "Basico":
      return "⭐";
    case "Medio":
      return "⭐⭐⭐";
    case "Avanzaso":
      return "⭐⭐⭐⭐⭐";
    default:
      return level;
  }
};

/**
 * Converts each string in an array to lowercase and returns the array with the strings in lowercase.
 * @type {Function}
 * @param {string[]} array Array with the strings.
 * @returns {string[]} New array with lowercase values.
 */
export const convertValuesOfArrayInToLower = (array: string[]): string[] => {
  let newArray: string[] = [];

  array.map((value: string) => {
    let minValue = value.toLowerCase();
    newArray.push(minValue);
  });

  return newArray;
};
