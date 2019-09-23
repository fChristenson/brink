export const fileTemplate = (
  pageName: string,
  componentImports: string[],
  xmlString: string
) => {
  return [
    "import React from 'react';",
    "import {",
    componentImports.concat(["Provider", "ColorNames"]).join(",\n"),
    "} from 'brink';",
    "",
    `export const ${pageName} = (props: any) => {`,
    "return (<Provider {...props}>",
    xmlString,
    "</Provider>);",
    "};"
  ].join("\n");
};
