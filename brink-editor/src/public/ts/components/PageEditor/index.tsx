import { compose } from "redux";
import { connect } from "react-redux";
import { PageEditor as Component } from "./component";
import { IState } from "../../store/state";
import { RouteComponentProps } from "react-router";
import { xml2json } from "xml-js";

const mapStateToProps = (state: IState, { match }: RouteComponentProps) => {
  const xmlStr = xml2json(state.codeEditor.xmlCode);
  const xml = JSON.parse(xmlStr);

  return {
    // @ts-ignore
    id: match.params.id,
    xml
  };
};

export const PageEditor = compose(connect(mapStateToProps))(Component);
