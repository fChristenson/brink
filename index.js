import ReactDom from "react-dom";
import { buildPage } from "./src/libs/pageBuilder";
import xml from "./test.xml.json";

ReactDom.render(buildPage(xml.elements), document.getElementById("root"));
