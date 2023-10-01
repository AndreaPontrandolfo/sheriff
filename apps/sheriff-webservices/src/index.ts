import getSheriffConfig from 'eslint-config-sheriff';
import { BarebonesConfigAtom } from '@sheriff/types';
import { generateRulesDataset } from './generateRulesDataset.js';
import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/get-new-sheriff-config', (req: Request, res: Response) => {
  const newConfig: BarebonesConfigAtom[] = getSheriffConfig(req.body);
  const { compiledConfig, pluginsNames } = generateRulesDataset(newConfig);

  res.send({ compiledConfig, pluginsNames });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
