import { Either } from 'monet';

import { IContract, ContractParams } from './definitions';
import { validateContract, ValidationError } from './validations';

export const update =
  (contractParams: Partial<ContractParams>) =>
  (contract: IContract): Either<ValidationError, IContract> =>
  validateContract({ ...contract, ...contractParams }).toEither();
