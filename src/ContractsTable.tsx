import React from 'react';

import styles from './app.module.scss'

import { IContract } from './definitions';
import useShowContract from './hooks/useShowContract';

interface ContractsTableProps {
  contracts: IContract[],
};

const ContractsTable = ({ contracts }: ContractsTableProps) => {
  const select = useShowContract(state => state.select);

  return (
    <>
      <h2 className={styles.contractTableTitle}>All contracts</h2>
      <table className={styles.contractTable}>
        <thead>
          <tr>
            <th style={{ paddingBottom: '24px' }}>Name</th>
            <th style={{ paddingBottom: '24px' }}>Value</th>
            <th style={{ paddingBottom: '24px' }}>Renewal Date</th>
          </tr>
        </thead>
        <tbody>
          {
            contracts.map((contract) => (
              <tr key={contract.id} onClick={() => select(contract.id)} className={styles.contractRow}>
                <td>{contract.name}</td>
                <td>{contract.value}</td>
                <td>{contract.renewalDate}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
};

export default ContractsTable;
