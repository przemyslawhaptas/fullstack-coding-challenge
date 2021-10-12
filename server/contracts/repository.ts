import { IContract } from './definitions';
import { Maybe } from 'monet';

let contracts: IContract[] = [
  {
    id: '1pTsrFI29BEexmhOIh1USMxcLxR',
    name: 'SalesLoft',
    renewalDate:'1/10/2022',
    value: 50000,
  },
  {
    id: '1pTswrX8ax9qRfCQ12JeFaUs8dk',
    name: 'Datadog',
    renewalDate:'6/10/2021',
    value: 30000,
  },
  {
    id: '1pTswotqdFXl5aqM6QRQbTdkJVm',
    name: 'Sentry.io',
    renewalDate:'5/7/2022',
    value: 10000,
  },
];

export const getAll = (): IContract[] => contracts;

export const find = (id: string): Maybe<IContract> => {
  const contract = contracts.find(c => c.id === id);

  return Maybe.fromUndefined(contract);
};

export const update = (contract: IContract): IContract => {
  contracts = contracts.map(c => c.id === contract.id ? contract : c);

  return contract;
};
