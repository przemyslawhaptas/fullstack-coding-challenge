import create from 'zustand'

import { IContract } from '../definitions'

import { genericFetch } from '../utils'

type IState = {
  contracts: IContract[]
}

export const useContractStore = create<IState>(set => ({
  contracts: [],
}))

export const initializeContractStore = async () => {
  const contracts = await genericFetch<IContract[]>(
    'http://localhost:8080/contracts',
  )
  useContractStore.setState({ contracts })
}
