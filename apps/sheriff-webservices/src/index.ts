/* eslint-disable @typescript-eslint/no-unsafe-call */
import getSheriffConfig from "eslint-config-sheriff";
import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { cors } from "hono/cors";
import type { BarebonesConfigAtom } from "@sherifforg/types";
import { generateRulesDataset } from "./generateRulesDataset.js";

const app = new Hono();
const port = Number(process.env.PORT || 5001);

app.use("/api/*", cors());

app.get("/api/keepalive", (context) => context.text("OK"));
app.post("/api/get-new-sheriff-config", (context) => {
  const newConfig: BarebonesConfigAtom[] = getSheriffConfig(context.req.json());
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

  return context.json({
    compiledConfig,
    pluginsNames,
    totalAvailableRulesAmount: allRulesCompiledConfig.length,
  });
});

serve(
  {
    fetch: app.fetch,
    port,
  },
  (info) => {
    console.debug(`Server is running on port ${info.port}`);
  },
);
