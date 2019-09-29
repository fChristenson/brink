import React from "react";
import { Button } from "@blueprintjs/core";

interface IProps {
  addPage(): void;
}

export const NewPageButton: React.FunctionComponent<IProps> = ({ addPage }) => {
  return (
    <Button
      className="bp3-minimal"
      icon="document"
      text="New page"
      onClick={addPage}
    />
  );
};
