import React from 'react'

import styles from './sider.module.scss'

const Sider: React.FC = ({ children }) => (
  <aside className={styles.sider}>
    <div className={styles.menuStyle}> {children}</div>
  </aside>
)

export default Sider
