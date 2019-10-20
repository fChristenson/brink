import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { FlowEditor } from "./app/components/FlowEditor";
import "../libs/dragAndDrop";
import { BrowserRouter, Route } from "react-router-dom";
import { PageEditor } from "./app/components/PageEditor";
import { Preview } from "./app/components/Preview";
import { previewRoute, pageRoute, rootRoute } from "../libs/api/routes";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Route exact path={rootRoute.template} component={FlowEditor} />
          <Route exact path={pageRoute.template} component={PageEditor} />
          <Route exact path={previewRoute.template} component={Preview} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
