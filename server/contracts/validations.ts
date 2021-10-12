import { Validation, Success, Fail } from 'monet';

import { IContract, ContractParams } from './definitions';

const InvalidValue = 'InvalidValue';
const InvalidNameLength = 'InvalidNameLength';
export type ValidationError = typeof InvalidValue | typeof InvalidNameLength;

export const validateContract = (contract: IContract): Validation<ValidationError, IContract> =>
  validateName(contract).bind(validateValue);

const validateName = (contract: IContract): Validation<ValidationError, IContract> => {
  const { name } = contract;

  return name.length <= 0 || name.length > 100
    ? Fail(InvalidNameLength)
    : Success(contract);
};

const validateValue = (contract: IContract): Validation<ValidationError, IContract> =>
  contract.value < 0 ? Fail(InvalidValue) : Success(contract);
