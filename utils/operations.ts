/**
 * Function that calculates the percentage
 * @param {number} total Full reference value
 * @param {number} value Reference value to be calculated
 * @returns {number} Percentage obtained
 */
export const Percentage = (total: number, value: number): number => {
  return (value * 100) / total;
};
