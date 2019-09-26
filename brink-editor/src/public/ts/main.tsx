import React from "react";
import ReactDom from "react-dom";
import { Intent, Spinner, Classes } from "@blueprintjs/core";

ReactDom.render(
  <Spinner className={Classes.SMALL} intent={Intent.PRIMARY} />,
  document.getElementById("root")
);
