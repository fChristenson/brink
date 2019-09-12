import ReactDom from "react-dom";
import { buildPage } from "./src/libs/pageBuilder";
import xml from "./test.xml.json";

const validators = {
  foo: value => value && value.length > 3 && "Vale is ge 3"
};

ReactDom.render(buildPage(xml, validators), document.getElementById("root"));
