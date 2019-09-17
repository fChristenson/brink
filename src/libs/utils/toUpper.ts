export const toUpper = (val: any): string | undefined => {
  try {
    return val.toUpperCase();
  } catch (_) {
    return undefined;
  }
};
