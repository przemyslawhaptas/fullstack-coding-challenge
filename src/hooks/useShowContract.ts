import create from 'zustand';
import { Maybe, Just, None } from 'monet';

type ShowContractState = {
  contractId: Maybe<string>,
  select: (id: string) => void,
  unselect: () => void,
};

const useShowContract = create<ShowContractState>(set => ({
  contractId: None(),
  select: (id: string) => set({ contractId: Just(id) }),
  unselect: () => set({ contractId: None() }),
}));

export default useShowContract;
