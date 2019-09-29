import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { FlowEditor } from "./components/FlowEditor";
import "../libs/dragAndDrop";
import { BrowserRouter, Route } from "react-router-dom";
import { PageEditor } from "./components/PageEditor";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" render={() => <FlowEditor />} />
        <Route exact path="/page" render={() => <PageEditor />} />
      </BrowserRouter>
    </Provider>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
