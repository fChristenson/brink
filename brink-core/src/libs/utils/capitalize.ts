export const capitalize = (str: string) => {
  const firstLetter = str.substring(0, 1).toUpperCase();
  return `${firstLetter}${str.substring(1, str.length)}`;
};
