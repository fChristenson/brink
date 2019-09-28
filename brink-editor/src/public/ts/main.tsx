import React from "react";
import ReactDom from "react-dom";
import { CodeEditor } from "./components/CodeEditor";
import { MenuBar } from "./components/MenuBar";
import { Canvas } from "./components/Canvas";
import { ComponentEditor } from "./components/ComponentEditor";

const App = () => {
  return (
    <div className="bp3-dark">
      <MenuBar />
      <Canvas />
      <CodeEditor />
      <ComponentEditor />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
