/* eslint-disable @typescript-eslint/no-unsafe-call */
import getSheriffConfig from "eslint-config-sheriff";
import type { BarebonesConfigAtom } from "@sherifforg/types";
import express, { type Request, type Response } from "express";
import cors from "cors";
import { generateRulesDataset } from "./generateRulesDataset.js";

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.get("/api/keepalive", (req: Request, res: Response) => {
  res.send("OK");
});
app.post("/api/get-new-sheriff-config", (req: Request, res: Response) => {
  const newConfig: BarebonesConfigAtom[] = getSheriffConfig(req.body);
  const allRulesConfig: BarebonesConfigAtom[] = getSheriffConfig(
    {
      react: true,
      lodash: true,
      next: true,
      playwright: true,
      jest: true,
      vitest: true,
    },
    true,
  );

  console.info("Sending new config...");
  const allRulesCompiledConfig =
    generateRulesDataset(allRulesConfig).compiledConfig;
  const { compiledConfig, pluginsNames } = generateRulesDataset(newConfig);

  console.info("New config sent.");

  res.send({
    compiledConfig,
    pluginsNames,
    totalAvailableRulesAmount: allRulesCompiledConfig.length,
  });
});

app.listen(port, () => {
  console.debug(`Server is running on port ${port}`);
});
