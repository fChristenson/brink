import { IRootNode } from "../../public/ts/components/Canvas/components/RootNode/RootNode";

export interface IExportPageRequest {
  name: string;
  xml: string;
}

export interface IExportFlowRequest {
  rootNodes: IRootNode[];
}
