import ReactDom from "react-dom";
import React from "react";
import { buildPage } from "./src/libs/pageBuilder";
import xml from "./test.xml.json";

const App = buildPage(xml);

ReactDom.render(<App />, document.getElementById("root"));
