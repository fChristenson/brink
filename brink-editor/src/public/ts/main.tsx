import React from "react";
import ReactDom from "react-dom";
import { CodeEditor } from "./components/CodeEditor";
import { MenuBar } from "./components/MenuBar";
import { Canvas } from "./components/Canvas";
import { ComponentEditor } from "./components/ComponentEditor";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "../libs/dragAndDrop";

const App = () => {
  return (
    <Provider store={store}>
      <div className="bp3-dark">
        <MenuBar />
        <div className="content">
          <CodeEditor />
          <Canvas />
          <ComponentEditor />
        </div>
      </div>
    </Provider>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
