import create from 'zustand'

import { IContract, ContractParams } from '../definitions'
import { get, post } from '../utils'

type IState = {
  contracts: IContract[]
}

export const useContractStore = create<IState>(set => ({
  contracts: [],
}))

export const initializeContractStore = async () => {
  const result = await get<IContract[]>(
    'http://localhost:8080/contracts',
  );

  if (result.isLeft()) {
    console.error(result.left());
    return result;
  }

  const contracts = result.right();
  useContractStore.setState({ contracts });

  return result;
};

export const updateContract = async (id: string, params: Partial<ContractParams>) => {
  const result = await post<IContract>(
    `http://localhost:8080/contracts/${id}`,
    params,
  );

  if (result.isLeft()) {
    console.error(result.left());
    return result;
  }

  const contract = result.right();
  const { contracts } = useContractStore.getState();
  const updatedContracts = contracts.map(c => c.id === contract.id ? contract : c);
  useContractStore.setState({ contracts: updatedContracts });

  return result;
};
