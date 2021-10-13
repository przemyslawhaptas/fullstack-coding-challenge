import React from 'react';

import { IContract } from './definitions';
import { updateContract } from './stores/contractStore'

interface ApplyDiscountProps {
  contract: IContract,
};

const withMinimum = (value: number): number => value < 0 ? 0 : value;

const ApplyDiscount = ({ contract }: ApplyDiscountProps) => {
  const value = withMinimum(contract.value - 500);

  return (
    <button
      style={{ marginTop: '24px', width: '100%', cursor: 'pointer' }}
      onClick={() => updateContract(contract.id, { value })}
    >
      Apply a 500$ Discount!
    </button>
  );
};

export default ApplyDiscount;
