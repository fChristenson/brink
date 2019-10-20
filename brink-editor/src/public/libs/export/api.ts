import {
  IExportPageRequest,
  IExportFlowRequest
} from "../../../libs/types/exportPage";
import { exportPage, exportFlow } from "../../../libs/routes";
import { getRequestInit } from "../api/requestInit";
import { IRootNode } from "../../ts/app/components/Canvas/components/RootNode/RootNode";

export const downloadTsxCode = async (name: string, xml: string) => {
  const body: IExportPageRequest = { name, xml };
  const data = getRequestInit("POST", body);
  const res = await fetch(exportPage, data);
  const text = await res.text();
  const blob = new Blob([text]);
  const link = document.createElement("a");
  link.download = `${name}.tsx`;
  link.href = window.URL.createObjectURL(blob);
  link.click();
};

export const downloadFlow = async (name: string, rootNodes: IRootNode[]) => {
  const body: IExportFlowRequest = { rootNodes };
  const data = getRequestInit("POST", body);
  const res = await fetch(exportFlow, data);
  const buf = await res.arrayBuffer();
  const link = document.createElement("a");
  link.download = `${name}.zip`;
  link.href = window.URL.createObjectURL(new Blob([buf]));
  link.click();
};
