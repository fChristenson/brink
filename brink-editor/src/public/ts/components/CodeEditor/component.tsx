import React from "react";
import Highlight from "react-highlight.js";

interface IProps {
  open: boolean;
}

export const CodeEditor: React.FunctionComponent<IProps> = ({ open }) => {
  const className = open
    ? "code_editor bp3-dark"
    : "code_editor--hidden bp3-dark";
  return (
    <div className={className}>
      <Highlight language="xml">
        {[
          "<Page>",
          '<Headline3 margin="12px">Test</Headline3>',
          "<Body2>Test</Body2>",
          "</Page>"
        ].join("\n")}
      </Highlight>
    </div>
  );
};
