import commander from "commander";

export const cli = commander
  .version("0.1.0")
  .description("Convert Brink xml file to Brink React code")
  .usage("<Brink xml file> [options]")
  .option(
    "-o --output <directory>",
    "Output directory when running against directory of Brink files"
  )
  .option("-j --json", "Print Brink file as JSON");

cli.parse(process.argv);
