import express from "express";
import path from "path";
import { compile } from "brink-cli";
import { IExportPageRequest } from "./libs/types/exportPage";
import { exportPage } from "./libs/routes";

export const app = express();

app.use(express.static(path.resolve(__dirname, "..", "dist")));
app.use(express.json());

app.post(exportPage, (req, res) => {
  const { name, xml } = req.body as IExportPageRequest;
  const out = compile(name, xml);
  res.type("tsx");
  res.send(out);
});

app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});
