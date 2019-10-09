export const highlightBlocks = (highlight: boolean) => {
  document.body.style.setProperty(
    "--highlight-containers-opacity",
    highlight ? "1" : "0"
  );
  document.body.style.setProperty(
    "--highlight-containers-pointer",
    highlight ? "pointer" : "initial"
  );
};
