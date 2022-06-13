import styles from './layout.module.scss'

import { Outlet } from 'react-router-dom'

import Tab from 'routes/Tab'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <main className={styles.movieListContainer}>
        <Outlet />
      </main>
      <Tab />
    </div>
  )
}

export default Layout
