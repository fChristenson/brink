import express from "express";
import { compile } from "brink-cli";
import path from "path";
import {
  IExportPageRequest,
  IExportFlowRequest
} from "./libs/types/exportPage";
import { exportPage, exportFlow } from "./libs/routes";
import archiver from "archiver";

export const app = express();

app.use(express.static(path.resolve(__dirname, "..", "dist")));
app.use(express.json());

app.post(exportPage, (req, res) => {
  const { name, xml } = req.body as IExportPageRequest;
  const out = compile(name, xml);
  res.type("tsx");
  res.send(out);
});

app.post(exportFlow, (req, res) => {
  const { rootNodes } = req.body as IExportFlowRequest;
  const format = "zip";
  res.type(format);
  const archive = archiver(format);

  rootNodes.forEach(n => {
    const code = compile(n.title, n.xmlCode);
    archive.append(code, { name: `${n.title}.tsx` });
  });

  archive.pipe(res);
  archive.finalize();
});

app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});
