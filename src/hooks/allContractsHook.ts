import { useContractStore } from '../stores/contractStore'

import { IContract } from '../definitions'

const useAllContracts = (): IContract[] => {
  const { contracts } = useContractStore()

  return contracts
}

export default useAllContracts
