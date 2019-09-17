export const toUpper = (val: any): string | undefined => {
  try {
    return val.toUpperCase();
  } catch (e) {
    return undefined;
  }
};
