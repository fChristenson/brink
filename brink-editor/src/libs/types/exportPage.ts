export interface IExportPageRequest {
  name: string;
  xml: string;
}

export interface IFlowExportData {
  title: string;
  xmlCode: string;
}

export interface IExportFlowRequest {
  rootNodes: IFlowExportData[];
}
