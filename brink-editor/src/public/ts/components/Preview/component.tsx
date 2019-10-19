import React from "react";
import { PageBuilder } from "brink-core";

interface IProps {
  xml?: any;
  props: any;
}

export const Preview: React.FunctionComponent<IProps> = ({ xml, props }) => {
  return <>{xml && <PageBuilder xml={xml} props={props} />}</>;
};
