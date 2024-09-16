import getSheriffConfig from 'eslint-config-sheriff';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import type { BarebonesConfigAtom, SheriffSettings } from '@sherifforg/types';
import { generateRulesDataset } from './generateRulesDataset.js';
import { getAllRules } from './getAllRules.js';
import { prependRulesWithPluginName } from './prependRulesWithPluginName.js';

const app = new Hono();
const port = Number(process.env.PORT || 5001);

app.use('/api/*', cors());

app.get('/api/keepalive', (context) => context.text('OK'));
app.post('/api/get-new-sheriff-config', async (context) => {
  const userConfigChoices: SheriffSettings = await context.req.json();

  const allRulesRaw = getAllRules(
    userConfigChoices,
    prependRulesWithPluginName,
  );

  const newConfig: BarebonesConfigAtom[] = getSheriffConfig(userConfigChoices);
  const anyRuleAllowedConfig: BarebonesConfigAtom[] = getSheriffConfig(
    {
      react: true,
      lodash: true,
      remeda: true,
      next: true,
      playwright: true,
      jest: true,
      vitest: true,
    },
    true,
  );

  console.info('Sending new config...');
  const allRulesCompiledConfig = generateRulesDataset(
    anyRuleAllowedConfig,
    allRulesRaw,
  ).compiledConfig;
  const { compiledConfig, pluginsNames } = generateRulesDataset(
    newConfig,
    allRulesRaw,
  );

  console.info('New config sent.');

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
    console.debug(`Server is running on port ${info.port.toString()}`);
  },
);
