import getSheriffConfig from 'eslint-config-sheriff';
import { BarebonesConfigAtom } from '@sheriff/types';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { generateRulesDataset } from './generateRulesDataset.js';

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.post('/api/get-new-sheriff-config', (req: Request, res: Response) => {
  const newConfig: BarebonesConfigAtom[] = getSheriffConfig(req.body);

  console.log('Sending new config...');
  const { compiledConfig, pluginsNames } = generateRulesDataset(newConfig);
  console.log('New config sent.');

  res.send({ compiledConfig, pluginsNames });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
