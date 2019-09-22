import ReactDom from "react-dom";
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Page1 } from "./testFlows/page1";
import { Page2 } from "./testFlows/page2";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <Page1 />} />
      <Route path="/2" render={() => <Page2 />} />
    </BrowserRouter>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
