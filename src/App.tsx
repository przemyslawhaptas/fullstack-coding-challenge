import React from 'react';

import useAllContracts from './hooks/allContractsHook'

import Sider from './sider'
import styles from './app.module.scss'

function App() {
  const contracts = useAllContracts()

  return (

    <section className={styles.layout}>
      <Sider>
        <img
          src="public/favicon.ico"
          alt="logo"
          style={{
            width: '150px',
            height: '36px',
            margin: '40px',
            display: 'inline-block',
          }}
        />
      </Sider>
      <section className={styles.contentLayout}>
        <main className={styles.content}>
          <div style={{ background: '#F5F6FA', height: '100%' }}>

             {/*
              Implement Table here
             */}

            </div>
        </main>
      </section>
    </section>


  );
}

export default App;
