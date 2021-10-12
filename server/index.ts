import express from 'express'

import { IGetUserAuthInfoRequest } from './definitions'
import * as contractsUseCases from './contracts/useCases';
import { NotFound } from './contracts/definitions';

const app = express()

app.use((req: IGetUserAuthInfoRequest, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Origin', req.get('origin') || '')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE')

  next()
});

app.use(express.json());

app.get('/healthcheck', (req, res) => {
  res.sendStatus(200)
})

app.get('/contracts', async (req: IGetUserAuthInfoRequest, res) => {
  const result = contractsUseCases.getAll();

  if (result.isLeft()) {
    return res.sendStatus(400);
  }

  const contracts = result.right();
  console.log('Sending contracts...', contracts);

  return res.send(contracts);
});

app.post('/contracts/:id', async (req: IGetUserAuthInfoRequest, res) => {
  const result = contractsUseCases.update(req.params.id, req.body);

  if (result.isLeft()) {
    if (result.left() === NotFound) {
      return res.sendStatus(404);
    } else {
      return res.sendStatus(400);
    }
  }

  const contract = result.right();

  return res.send(contract);
});

app.listen(8080, () => {
    console.log(`Server is running at https://localhost:8080`);
  });
