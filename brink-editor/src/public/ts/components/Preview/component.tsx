import React from "react";
import { PageBuilder } from "brink-core";

interface IProps {
  xml?: string;
}

export const Preview: React.FunctionComponent<IProps> = ({ xml }) => {
  return <>{xml && <PageBuilder xml={xml} props={{}} />}</>;
};
