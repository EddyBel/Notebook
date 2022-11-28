/**
 * Returns a string number within the list randomly.
 * @returns {string} Position
 */
export const colorRandom = (): string => {
  const colors = [
    "one",
    "two",
    "tree",
    "four",
    "five",
    "six",
    "seven",
    "nine",
    "ten",
  ];
  const long = colors.length - 1;
  let position = Math.round(Math.random() * long);

  return colors[position];
};
