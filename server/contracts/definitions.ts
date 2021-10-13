import { ValidationError } from './validations';

export interface IContract {
  id: string
  name: string
  renewalDate: string
  value: number
};

export interface ContractParams {
  name: string
  value: number
};

export const NotFound = 'NotFound';
export type Error = typeof NotFound | ValidationError;
