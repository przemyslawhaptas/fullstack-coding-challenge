import { Either, Right, Left, Maybe } from 'monet';

import { IContract, ContractParams, Error, NotFound } from './definitions';
import * as contractsRepository from './repository';
import * as services from './services';

export const getAll = (): Either<Error, IContract[]> => {
  const contracts = contractsRepository.getAll();

  return Right(contracts);
};

export const update = (id: string, params: Partial<ContractParams>): Either<Error, IContract> => {
  const oldContract = contractsRepository.find(id).toEither(NotFound as Error);
  const newContract = oldContract.bind(services.update(params));

  return newContract.map(contractsRepository.update);
};
