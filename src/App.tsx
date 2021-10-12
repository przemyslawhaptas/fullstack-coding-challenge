import React from 'react';

import useAllContracts from './hooks/allContractsHook'

import Sider from './sider'
import styles from './app.module.scss'

import ContractsTable from './ContractsTable';
import ContractModal from './ContractModal';

function App() {
  const contracts = useAllContracts()

  return (
    <section className={styles.layout}>
      <Sider />
      <section className={styles.contentLayout}>
        <main className={styles.content}>

        <div style={{ background: '#F5F6FA', height: '100%' }}>
          <ContractsTable contracts={contracts} />
          <ContractModal contracts={contracts} />
        </div>
        </main>
      </section>
    </section>
  );
}

export default App;
