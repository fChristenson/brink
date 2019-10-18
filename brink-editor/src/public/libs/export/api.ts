import { IExportPageRequest } from "../../../libs/types/exportPage";
import { exportPage } from "../../../libs/routes";
import { getRequestInit } from "../api/requestInit";

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
