import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { FlowEditor } from "./components/FlowEditor";
import "../libs/dragAndDrop";
import { BrowserRouter, Route } from "react-router-dom";
import { PageEditor } from "./components/PageEditor";
import { Preview } from "./components/Preview";
import { previewRoute, pageRoute, rootRoute } from "../libs/api/routes";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path={rootRoute.template} component={FlowEditor} />
        <Route exact path={pageRoute.template} component={PageEditor} />
        <Route exact path={previewRoute.template} component={Preview} />
      </BrowserRouter>
    </Provider>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
